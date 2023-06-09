const Title = ({ title, className }) => {
  return (
    <div
      className={`text-white text-[24px] font-normal whitespace-nowrap ${className}`}>
      {title}
    </div>
  )
}

export default Title
