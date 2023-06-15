import { useEffect, useState } from 'react'
import Name from '@/components/Name'
import Temperature from '@/components/Temperature'
import WeatherDesc from './WeatherDesc'
import WeatherIcon from '@/components//WeatherIcon/'
import Meta from './Meta'
import { getTodayWeather } from '@/api/currentCityCall'

const CurrentCity = ({ city, setLoading }) => {
  const [currentCityWeather, setCurrentCityWeather] = useState([])
  useEffect(() => {
    console.log('working')
    if (!city) return
    setLoading(true)
    getTodayWeather(city)
      .then((data) => {
        setCurrentCityWeather(data)
        console.log(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [city])

  return (
    <div>
      <div className="flex flex-col gap-24 ml-4">
        <Name className="text-6xl font-bold mt-8">
          {currentCityWeather.cityName}
        </Name>
        <div className="flex items-center gap-16">
          <Temperature
            temperature={currentCityWeather.temperature}
            className="text-7xl"
          />
          <Meta
            humidity={currentCityWeather.humidity}
            windSpeed={currentCityWeather.windSpeed}
          />
        </div>
        <div className="flex items-center">
          <WeatherDesc
            description={currentCityWeather.description}
            className="text-4xl"
          />
          <WeatherIcon weatherIcon={currentCityWeather.weatherIcon} />
        </div>
      </div>
    </div>
  )
}

export default CurrentCity
