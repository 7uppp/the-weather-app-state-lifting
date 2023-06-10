import { useContext } from 'react'
import { WeatherContext } from '../../../../../../src/context/WeatherContext'
import Title from '../../../../Title/Title'
import WeeklyCard from './components/WeeklyCard/WeeklyCard'

const WeeklyForecast = () => {
  const { weeklyData } = useContext(WeatherContext)
  // console.log(weeklyData)
  return (
    <div className="flex flex-col">
      <Title title={'7-DAY-FORECAST'} className={'mt-8'} />
      <WeeklyCard weeklyData={weeklyData} />
    </div>
  )
}

export default WeeklyForecast
