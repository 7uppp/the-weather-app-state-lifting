import { SearchIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { WeatherContext } from '../../../../../../context/WeatherContext'

const Icon = () => {
  const { setProperty, city, getTodayWeather, getWeeklyWeather } =
    useContext(WeatherContext)

  const handleClick = () => {
    setProperty('clicked', 'Search')
    getTodayWeather(city)
    getWeeklyWeather(city)
    setProperty('city', '')
  }

  return <SearchIcon onClick={handleClick} />
}

export default Icon
