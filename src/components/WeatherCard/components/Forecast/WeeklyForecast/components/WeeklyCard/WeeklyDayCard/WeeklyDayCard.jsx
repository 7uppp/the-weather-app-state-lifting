import Date from '../../../../../../../../components/Date'
import WeatherIcon from '../../../../../../../../components/WeatherIcon'
import WeatherDesc from '../../../../../../components/CurrentCity/components/WeatherDesc'
import Tempature from '../../../../../../../../components/Tempature'

const WeeklyDayCard = ({ dayData }) => {
  console.log(dayData)
  const { date, day } = dayData || {}
  const { condition, avgtemp_c } = day || {}

  return (
    <div className="flex gap-4 items-center">
      <Date date={date?.slice(5)} />
      <WeatherIcon weatherIcon={condition?.icon} />
      <WeatherDesc desc={condition?.text} />
      <Tempature temp={avgtemp_c} />
    </div>
  )
}

export default WeeklyDayCard
