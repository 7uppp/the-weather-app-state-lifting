import bg from '@/img/hero-pattern.jpg'

const CurrentCityBackground = ({ children, className }) => {
  return (
    <div
      className={`backgroundImage bg-center bg-cover ${className}`}
      style={{ backgroundImage: `url(${bg})` }}>
      {children}
    </div>
  )
}

export default CurrentCityBackground
