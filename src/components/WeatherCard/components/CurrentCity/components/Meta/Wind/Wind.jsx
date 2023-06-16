const Wind = ({ windSpeed, isLoading }) => {
  return (
    <div>
      wind: {isLoading ? 'Loading...' : `${Number(windSpeed).toFixed()}km/h`}
    </div>
  )
}

export default Wind
