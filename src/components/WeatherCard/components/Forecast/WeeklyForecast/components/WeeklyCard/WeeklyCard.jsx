import Tempature from '../../../../../../Tempature/Tempature'
import WeatherIcon from '../../../../../../WeatherIcon/WeatherIcon'
import WeatherDesc from '../../../../currentCity/components/WeatherDesc/WeatherDesc'
import Date from '../../../../../../Date/Date'

const WeeklyCard = ({ weeklyDate, weeklyIcon, weeklyTemp, weeklyText }) => {
  return (
    <div className="flex items-center gap-4 whitespace-nowrap">
      <Date date={weeklyDate}></Date>
      <WeatherIcon weatherIcon={weeklyIcon} />
      <WeatherDesc desc={weeklyText} />
      <Tempature temp={weeklyTemp} />
    </div>
  )
}

export default WeeklyCard
