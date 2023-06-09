const Tempature = ({ temp, className }) => {
  return (
    <div className={`text-white font-medium ${className}`}>
      {Number(temp).toFixed()}℃
    </div>
  )
}

export default Tempature
