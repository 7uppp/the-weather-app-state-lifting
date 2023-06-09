const WeatherIcon = ({ weatherIcon }) => {
  return (
    <div>
      <img src={`https:${weatherIcon}`} alt="WeatherImage" width="100%" />
    </div>
  )
}

export default WeatherIcon
