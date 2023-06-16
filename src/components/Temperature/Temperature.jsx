const Temperature = ({ temperature, className, isLoading }) => {
  return (
    <div className={`text-white font-medium ${className}`}>
      {isLoading ? 'Loading' : `${Number(temperature).toFixed()}℃`}
    </div>
  )
}

export default Temperature
