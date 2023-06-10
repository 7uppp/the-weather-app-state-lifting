const ContentBox = ({ children, className }) => {
  return (
    <div
      className={`rounded-[3px] w-full border-2 focus:outline-none overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

export default ContentBox
