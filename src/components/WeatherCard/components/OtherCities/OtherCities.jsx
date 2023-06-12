import City from './components/City/City'

const OtherCities = ({ otherCitiesWeatherData }) => {
  return (
    <div className="flex gap-4 justify-evenly mt-8">
      {otherCitiesWeatherData.map((cityData, index) => {
        return <City key={index} cityData={cityData} />
      })}
    </div>
  )
}

export default OtherCities
