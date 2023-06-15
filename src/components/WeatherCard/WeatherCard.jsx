import { useState } from 'react'
import CurrentCity from './components/currentCity/components/CurrentCity'
import WeeklyCard from '@/components/WeatherCard/components/CurrentCity/components/WeeklyCard'
import SearchBar from './components/SearchBar/SearchBar'
import bg from '@/img/hero-pattern.jpg'
import BackgroundImage from '../backgroundImage'
import OtherCities from './components/OtherCities'

const WeatherCard = () => {
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState('Brisbane')

  // const [weeklyWeatherData, setWeeklyWeatherData] = useState([])
  // const [otherCitiesWeatherData, setOtherCitiesWeatherData] = useState([])

  //   getWeeklyWeather(city)
  //     .then((data) => {
  //       setWeeklyWeatherData(data)
  //       console.log(data)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  //   getOtherCitiesWeather(city).then((data) => {
  //     setOtherCitiesWeatherData(data)
  //     // console.log(data)
  //   })
  // }, [city])

  return (
    <div className="w-full max-w-7xl overflow-hidden">
      <SearchBar city={city} setCity={setCity} />
      <BackgroundImage img={bg} className="rounded-lg border-4 border-white">
        <div className="flex xl:flex-row flex-col justify-around  ">
          <CurrentCity city={city} setLoading={setLoading} img={bg} />
          <WeeklyCard city={city} setLoading={setLoading} />
        </div>
        <OtherCities />
      </BackgroundImage>
    </div>
  )
}

export default WeatherCard
