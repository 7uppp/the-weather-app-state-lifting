const Humidity = ({ humidity, isLoading }) => {
  return <div>Humidity: {isLoading ? 'Loading' : humidity}%</div>
}

export default Humidity
