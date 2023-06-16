const WeatherIcon = ({ weatherIcon, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        'Loading'
      ) : (
        <img src={`https:${weatherIcon}`} alt="WeatherImage" width="100%" />
      )}
    </div>
  )
}

export default WeatherIcon
