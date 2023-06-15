const Temperature = ({ temperature, className }) => {
  return (
    <div className={`text-white font-medium ${className}`}>
      {Number(temperature).toFixed()}℃
    </div>
  )
}

export default Temperature
