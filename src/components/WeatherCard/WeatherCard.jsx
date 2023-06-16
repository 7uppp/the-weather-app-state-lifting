import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CurrentCity from './components/currentCity/components/CurrentCity'
import WeeklyCard from '@/components/WeatherCard/components/CurrentCity/components/WeeklyCard'
import SearchBar from './components/SearchBar/SearchBar'
import OtherCities from './components/OtherCities'
import HeroBackground from '@/components/HeroBackground'

const WeatherCard = () => {
  const [city, setCity] = useState('Brisbane')
  const location = useLocation()

  useEffect(() => {
    const url = new URL(
      location.pathname + location.search,
      window.location.origin
    )
    const newCity = url.searchParams.get('city')
    newCity ? setCity(newCity) : setCity('Brisbane')
  }, [location])

  return (
    <div className="w-full max-w-7xl overflow-hidden">
      <SearchBar setCity={setCity} />
      <HeroBackground className="rounded-lg border-4 border-white">
        <div className="flex xl:flex-row flex-col justify-around  ">
          <CurrentCity city={city} />
          <WeeklyCard city={city} />
        </div>
        <OtherCities />
      </HeroBackground>
    </div>
  )
}

export default WeatherCard
