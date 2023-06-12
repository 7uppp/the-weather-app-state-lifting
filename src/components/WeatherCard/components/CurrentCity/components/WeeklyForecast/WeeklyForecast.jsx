import Title from '@/components/Title'
import WeeklyCard from './components/WeeklyCard/WeeklyCard'

const WeeklyForecast = ({ weeklyWeatherData }) => {
  // console.log(weeklyData)
  return (
    <div className="flex flex-col xl:ml-0 ml-8 ">
      <Title title={'7-DAY-FORECAST'} className={'mt-8'} />
      <WeeklyCard weeklyData={weeklyWeatherData} />
    </div>
  )
}

export default WeeklyForecast
