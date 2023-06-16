import { useState, useEffect } from 'react'
import City from './components/City/City'
import { getOtherCitiesWeather } from '@/api/otherCitiesCall'
const OtherCities = () => {
  const [otherCitiesWeatherData, setOtherCitiesWeatherData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getOtherCitiesWeather()
      .then((data) => {
        setOtherCitiesWeatherData(data)
        console.log(data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="flex gap-4 justify-evenly mt-8">
      {otherCitiesWeatherData.map((cityData, index) => {
        return <City key={index} cityData={cityData} isLoading={isLoading} />
      })}
    </div>
  )
}

export default OtherCities
