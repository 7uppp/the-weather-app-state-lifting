import Name from '../../../../../../components/name/Name'
import Tempature from '../../../../../Tempature/Tempature'
import WeatherIcon from '../../../../../WeatherIcon/WeatherIcon'

const City = ({ cityData }) => {
  // console.log(cityData)
  const { cityName, temp, weatherIcon } = cityData || {}
  return (
    <div className="flex gap-2 items-center">
      <Name className="text-white font-normal ">{cityName}</Name>
      <WeatherIcon weatherIcon={weatherIcon} />
      <Tempature temp={temp} />
    </div>
  )
}

export default City
