import axios from 'axios'


const makeRequest = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
})


export const getTodayWeather = async (city) => {

  try {
    const response = await makeRequest.get(
      `current.json?q=${city}&key=${import.meta.env.VITE_API_KEY}`
    )
    const {
      location: { name: cityName },
      current: {
        temp_c: temperature,
        condition: { text: description, icon: weatherIcon },
        humidity,
        wind_kph: windSpeed,
      },
    } = response.data
    return { cityName, temperature, description, weatherIcon, humidity, windSpeed }

  } catch (error) {
    console.log(error)
    return {}
  }

}


export const getWeeklyWeather = async (city) => {
  try {
    const response = await makeRequest.get(
      `forecast.json?q=${city}&days=7&key=${import.meta.env.VITE_API_KEY}`)
    const {
      forecast: { forecastday },
    } = response.data
    return forecastday

  } catch (error) {
    console.log(error)
    return {}
  }
}
