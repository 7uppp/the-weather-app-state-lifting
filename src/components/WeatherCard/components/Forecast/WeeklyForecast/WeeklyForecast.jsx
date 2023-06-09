import { useContext } from 'react'
import { WeatherContext } from '../../../../../../src/context/WeatherContext'
import Title from '../../../../Title/Title'
import WeeklyCard from './components/WeeklyCard/WeeklyCard'

const WeeklyForecast = () => {
  const { weeklyDate, weeklyTemp, weeklyText, weeklyIcon } =
    useContext(WeatherContext)
  console.log(weeklyDate)
  return (
    <div>
      <Title title={'7-DAY-FORECAST'} className={'mt-8'} />
      <WeeklyCard
        weeklyDate={weeklyDate}
        weeklyIcon={weeklyIcon}
        weeklyTemp={weeklyTemp}
        weeklyText={weeklyText}
      />
    </div>
  )
}

export default WeeklyForecast
