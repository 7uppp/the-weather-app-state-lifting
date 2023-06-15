import Date from '@/components/Date'
import WeatherIcon from '@/components/WeatherIcon'
import WeatherDesc from '@/components/WeatherCard/components/CurrentCity/components/WeatherDesc'
import Temperature from '@/components/Temperature'

const WeeklyDayCard = ({ dayWeather }) => {
  // console.log(dayData)
  const { date, day } = dayWeather || {}
  const { condition, avgtemp_c } = day || {}

  return (
    <div className="flex gap-4 items-center">
      <Date date={date?.slice(5)} />
      <WeatherIcon weatherIcon={condition?.icon} />
      <WeatherDesc description={condition?.text} />
      <Temperature temperature={avgtemp_c} />
    </div>
  )
}

export default WeeklyDayCard
