import { useEffect, useState } from 'react'
import Name from '@/components/Name'
import Temperature from '@/components/Temperature'
import WeatherDesc from './WeatherDesc'
import WeatherIcon from '@/components//WeatherIcon/'
import Meta from './Meta'
import { getTodayWeather } from '@/api/currentCityCall'

const CurrentCity = ({ city }) => {
  const [currentCityWeather, setCurrentCityWeather] = useState([])
  const [currentCityLoading, setCurrentCityLoading] = useState(false)
  useEffect(() => {
    if (!city) return
    setCurrentCityLoading(true)
    getTodayWeather(city)
      .then((data) => {
        setCurrentCityWeather(data)
        console.log(data)
      })
      .finally(() => {
        setCurrentCityLoading(false)
      })
  }, [city])

  return (
    <div className="flex flex-col gap-24 ml-4">
      <Name className="text-6xl font-bold mt-8" isLoading={currentCityLoading}>
        {currentCityWeather.cityName}
      </Name>
      <div className="flex items-center gap-16">
        <Temperature
          temperature={currentCityWeather.temperature}
          className="text-7xl"
          isLoading={currentCityLoading}
        />
        <Meta
          humidity={currentCityWeather.humidity}
          windSpeed={currentCityWeather.windSpeed}
          isLoading={currentCityLoading}
        />
      </div>
      <div className="flex items-center">
        <WeatherDesc
          description={currentCityWeather.description}
          className="text-4xl"
          isLoading={currentCityLoading}
        />
        <WeatherIcon
          weatherIcon={currentCityWeather.weatherIcon}
          isLoading={currentCityLoading}
        />
      </div>
    </div>
  )
}

export default CurrentCity
