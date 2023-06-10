import { useContext } from 'react'
import City from './components/City/City'
import { WeatherContext } from '../../../../context/WeatherContext'

const OtherCities = () => {
  const { otherCitiesData } = useContext(WeatherContext)

  return (
    <div className="flex gap-4 justify-evenly mt-8">
      {otherCitiesData.map((cityData, index) => {
        return <City key={index} cityData={cityData} />
      })}
    </div>
  )
}

export default OtherCities
