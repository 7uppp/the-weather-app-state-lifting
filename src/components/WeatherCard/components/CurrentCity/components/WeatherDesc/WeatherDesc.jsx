const WeatherDesc = ({ description, className, isLoading }) => {
  return (
    <div className={`text-white font-normal ${className}`}>
      {isLoading ? 'Loading' : description}
    </div>
  )
}

export default WeatherDesc
