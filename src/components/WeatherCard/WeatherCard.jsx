import { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherContext'
import CurrentCity from './components/currentCity/components/CurrentCity'
import WeeklyForecast from './components/Forecast/WeeklyForecast'
import SearchBar from './components/SearchBar/SearchBar'
import bg from '../../img/hero-pattern.jpg'
import BackgroundImage from '../backgroundImage/BackgroundImage'
import OtherCities from './components/OtherCities/OtherCities'

const WeatherCard = () => {
  const { cityName, temp, desc, weatherIcon, humidity, wind_kph } =
    useContext(WeatherContext)

  return (
    <div className="w-full max-w-7xl overflow-hidden">
      <SearchBar />
      <BackgroundImage img={bg} className="rounded-lg border-4 border-white">
        <div className="flex justify-around ">
          <CurrentCity
            cityName={cityName}
            temp={temp}
            desc={desc}
            humidity={humidity}
            wind_kph={wind_kph}
            weatherIcon={weatherIcon}
            img={bg}
          />
          <WeeklyForecast />
        </div>
        <OtherCities />
      </BackgroundImage>
    </div>
  )
}

export default WeatherCard
