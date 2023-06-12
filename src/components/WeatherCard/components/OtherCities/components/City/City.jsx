import Name from '@/components/Name/Name'
import Tempature from '@/components/Tempature/Tempature'
import WeatherIcon from '@/components/WeatherIcon/WeatherIcon'

const City = ({ cityData }) => {
  // console.log(cityData)
  return (
    <div className="flex gap-2 items-center">
      <Name className="text-white font-normal ">{cityData?.cityName}</Name>
      <WeatherIcon weatherIcon={cityData?.weatherIcon} />
      <Tempature temp={cityData?.temp} />
    </div>
  )
}

export default City
