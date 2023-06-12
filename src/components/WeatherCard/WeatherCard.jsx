import { useEffect, useState } from 'react'
import CurrentCity from './components/currentCity/components/CurrentCity'
import WeeklyForecast from './components/CurrentCity/components/WeeklyForecast'
import SearchBar from './components/SearchBar/SearchBar'
import bg from '@/img/hero-pattern.jpg'
import BackgroundImage from '../backgroundImage'
import OtherCities from './components/OtherCities'
import { getTodayWeather, getWeeklyWeather } from '@/api/currentCityCall'
import { getOtherCitiesWeather } from '@/api/otherCitiesCall'

const WeatherCard = () => {
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState('Brisbane')
  const [currentCityWeatherData, setCurrentCityWeatherData] = useState([])
  const [weeklyWeatherData, setWeeklyWeatherData] = useState([])
  const [otherCitiesWeatherData, setOtherCitiesWeatherData] = useState([])

  useEffect(() => {
    if (!city) return
    setLoading(true)
    getTodayWeather(city)
      .then((data) => {
        setCurrentCityWeatherData(data)
        // console.log(data)
      })
      .finally(() => {
        setLoading(false)
      })
    getWeeklyWeather(city)
      .then((data) => {
        setWeeklyWeatherData(data)
        console.log(data)
      })
      .finally(() => {
        setLoading(false)
      })
    getOtherCitiesWeather(city).then((data) => {
      setOtherCitiesWeatherData(data)
      // console.log(data)
    })
  }, [city])

  return (
    <div className="w-full max-w-7xl overflow-hidden">
      <SearchBar city={city} setCity={setCity} />
      <BackgroundImage img={bg} className="rounded-lg border-4 border-white">
        <div className="flex xl:flex-row flex-col justify-around  ">
          {loading ? (
            '...'
          ) : (
            <CurrentCity
              cityName={currentCityWeatherData?.cityName}
              temp={currentCityWeatherData?.temp}
              desc={currentCityWeatherData?.desc}
              humidity={currentCityWeatherData?.humidity}
              wind_kph={currentCityWeatherData?.wind_kph}
              weatherIcon={currentCityWeatherData?.weatherIcon}
              img={bg}
            />
          )}
          <WeeklyForecast weeklyWeatherData={weeklyWeatherData} />
        </div>
        <OtherCities otherCitiesWeatherData={otherCitiesWeatherData} />
      </BackgroundImage>
    </div>
  )
}

export default WeatherCard
