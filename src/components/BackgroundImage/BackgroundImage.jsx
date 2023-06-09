const BackgroundImage = ({ children, img, className }) => {
  return (
    <div
      className={`backgroundImage bg-center bg-cover ${className}`}
      style={{ backgroundImage: `url(${img})` }}>
      {children}
    </div>
  )
}

export default BackgroundImage
