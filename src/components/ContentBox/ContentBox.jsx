const ContentBox = ({ children, className }) => {
  return (
    <div
      className={`rounded-[3px] w-full border-2 text-white-100 focus:outline-none overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

export default ContentBox
