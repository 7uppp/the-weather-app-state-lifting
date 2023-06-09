import City from './components/City/City'

const OtherCities = () => {
  return (
    <div className="flex gap-4 justify-evenly mt-8">
      <City name={'Sydney'} />
      <City name={'Melbourne'} />
      <City name={'Adelaide'} />
      <City name={'Perth'} />
    </div>
  )
}

export default OtherCities
