import Name from '@/components/Name/Name'
import Temperature from '@/components/Temperature/Temperature'
import WeatherIcon from '@/components/WeatherIcon/WeatherIcon'

const City = ({ cityData }) => {
  // console.log(cityData)
  return (
    <div className="flex gap-2 items-center">
      <Name className="text-white font-normal ">{cityData?.cityName}</Name>
      <WeatherIcon weatherIcon={cityData?.weatherIcon} />
      <Temperature temperature={cityData?.temperature} />
    </div>
  )
}

export default City
