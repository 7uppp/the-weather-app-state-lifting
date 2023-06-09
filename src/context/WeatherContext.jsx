import { createContext, useState, useCallback } from 'react'
import axios from 'axios'

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [state, setState] = useState({
    clicked: '',
    city: '',
    loading: false,
    error: false,
    cityName: '',
    temp: 0,
    weatherIcon: '',
    desc: '',
    humidity: '',
    wind_kph: '',
    weeklyDate: '',
    weeklyTemp: '',
    weeklyText: '',
    weeklyIcon: '',
  })

  const setProperty = useCallback((property, value) => {
    setState((prevState) => ({ ...prevState, [property]: value }))
  }, [])

  const makeRequest = axios.create({
    baseURL: 'https://api.weatherapi.com/v1/',
  })

  const getTodayWeather = async (city) => {
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
      console.log(response.data)
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

  const getWeeklyWeather = async (city) => {
    setProperty('loading', true)
    try {
      const response = await makeRequest.get(
        `forecast.json?q=${city}&days=7&key=${import.meta.env.VITE_API_KEY}`
      )
      setProperty('loading', false)
      const {
        forecast: { forecastday },
      } = response.data
      console.log(forecastday)

      forecastday.slice(0, 7).map((forecast, index) => {
        const {
          date: WeeklyDate,
          day: {
            avgtemp_c: weeklyTemp,
            condition: { text: weeklyText, icon: weeklyIcon },
          },
        } = forecast
      })
    } catch (error) {
      console.log(error)
      setProperty('error', error)
    } finally {
      setProperty('loading', false)
    }
  }

  return (
    <WeatherContext.Provider
      value={{ ...state, setProperty, getTodayWeather, getWeeklyWeather }}>
      {children}
    </WeatherContext.Provider>
  )
}
