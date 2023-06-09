import Name from '../../../../Name'
import Tempature from '../../../../Tempature'
import WeatherDesc from './WeatherDesc'
import WeatherIcon from '../../../../WeatherIcon/'
import Meta from './Meta'

const CurrentCity = ({
  cityName,
  temp,
  desc,
  weatherIcon,
  humidity,
  wind_kph,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-24 ml-4">
        <Name className="text-6xl font-bold mt-8">{cityName}</Name>
        <div className="flex items-center gap-16">
          <Tempature temp={temp} className="text-7xl" />
          <Meta humidity={humidity} wind_kph={wind_kph} />
        </div>
        <div className="flex items-center">
          <WeatherDesc desc={desc} className="text-4xl" />
          <WeatherIcon weatherIcon={weatherIcon} />
        </div>
      </div>
    </div>
  )
}

export default CurrentCity
