import { createContext, useState, useCallback, useEffect } from 'react'
import axios from 'axios'

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [state, setState] = useState({
    clicked: '',
    city: 'Brisbane',
    loading: false,
    error: false,
    cityName: '',
    temp: 0,
    weatherIcon: '',
    desc: '',
    humidity: '',
    wind_kph: '',
    weeklyData: [],
    otherCitiesData: [],
  })

  const setProperty = useCallback((property, value) => {
    setState((prevState) => ({ ...prevState, [property]: value }))
  }, [])

  const makeRequest = axios.create({
    baseURL: 'https://api.weatherapi.com/v1/',
  })

  const getTodayWeather = async (city = state.city) => {
    setProperty('loading', true)
    try {
      const response = await makeRequest.get(
        `current.json?q=${city}&key=${import.meta.env.VITE_API_KEY}`
      )
      setProperty('loading', false)
      const {
        location: { name: cityName },
        current: {
          temp_c: temp,
          condition: { text: desc, icon: weatherIcon },
          humidity,
          wind_kph,
        },
      } = response.data
      // console.log(response.data)
      const dataToArrary = {
        cityName,
        temp,
        desc,
        weatherIcon,
        humidity,
        wind_kph,
      }
      // console.log(dataToArrary)

      Object.entries(dataToArrary).map(([key, value]) => {
        setProperty(key, value)
      })
    } catch (error) {
      console.log(error)
      setProperty('error', error)
    } finally {
      setProperty('loading', false)
    }
  }

  const getWeeklyWeather = async (city = state.city) => {
    setProperty('loading', true)
    try {
      const response = await makeRequest.get(
        `forecast.json?q=${city}&days=7&key=${import.meta.env.VITE_API_KEY}`
      )
      setProperty('loading', false)
      const {
        forecast: { forecastday },
      } = response.data
      // console.log(forecastday)

      setProperty('weeklyData', forecastday)
    } catch (error) {
      console.log(error)
      setProperty('error', error)
    } finally {
      setProperty('loading', false)
    }
  }

  const getOtherCitiesWeather = async (city) => {
    const cities = ['Sydney', 'Adelaide', 'Melbourne', 'Perth']
    setProperty('loading', true)
    try {
      const response = await Promise.all(
        cities.map((city) =>
          makeRequest.get(
            `current.json?q=${city}&key=${import.meta.env.VITE_API_KEY}`
          )
        )
      )
      // console.log(response)
      const otherCities = response.map((city) => {
        const {
          location: { name: cityName },
          current: {
            temp_c: temp,
            condition: { icon: weatherIcon },
          },
        } = city.data
        return {
          cityName,
          temp,
          weatherIcon,
        }
      })
      // console.log(otherCities)
      setProperty('loading', false)
      setProperty('otherCitiesData', otherCities)
      // console.log(otherCities)
    } catch (error) {
      console.log(error)
      setProperty('error', error)
    } finally {
      setProperty('loading', false)
    }
  }

  useEffect(() => {
    getTodayWeather()
    getWeeklyWeather()
  }, [state['city']])

  useEffect(() => {
    getOtherCitiesWeather()
  }, [])

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        setProperty,
        getTodayWeather,
        getWeeklyWeather,
        getOtherCitiesWeather,
      }}>
      {children}
    </WeatherContext.Provider>
  )
}
