import axios from 'axios'


const makeRequest = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
})


export const getOtherCitiesWeather = async () => {
  const cities = ['Sydney', 'Adelaide', 'Melbourne', 'Perth']
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
          temp_c: temperature,
          condition: { icon: weatherIcon },
        },
      } = city.data
      return {
        cityName,
        temperature,
        weatherIcon,
      }
    })

    return otherCities

    // console.log(otherCities)
  } catch (error) {
    console.log(error)
    return {}
  }
}