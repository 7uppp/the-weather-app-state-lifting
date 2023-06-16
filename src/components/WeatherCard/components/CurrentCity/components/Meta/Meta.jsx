import Humidity from './Humidity/Humidity'
import Wind from './Wind/Wind'

const Meta = ({ humidity, windSpeed, isLoading }) => {
  // console.log(humidity)
  return (
    <div className="flex text-white gap-4 mt-6">
      <Humidity humidity={humidity} isLoading={isLoading} />
      <div className="border-[1px] border-white " />
      <Wind windSpeed={windSpeed} isLoading={isLoading} />
    </div>
  )
}

export default Meta
