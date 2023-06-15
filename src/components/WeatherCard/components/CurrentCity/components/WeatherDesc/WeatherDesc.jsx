const WeatherDesc = ({ description, className }) => {
  return (
    <div className={`text-white font-normal ${className}`}>{description}</div>
  )
}

export default WeatherDesc
