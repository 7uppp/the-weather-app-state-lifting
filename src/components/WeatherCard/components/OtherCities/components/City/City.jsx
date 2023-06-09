import Name from '../../../../../../components/name/Name'
import Tempature from '../../../../../Tempature/Tempature'
import WeatherIcon from '../../../../../WeatherIcon/WeatherIcon'

const City = ({ name, weatherIcon }) => {
  return (
    <div className="flex gap-2 items-center">
      <Name className="text-white font-normal ">{name}</Name>
      <WeatherIcon weatherIcon={weatherIcon} />
      <Tempature temp={20} />
    </div>
  )
}

export default City
