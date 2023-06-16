const Name = ({ children, className, isLoading }) => (
  <div className={`text-white ${className}`}>
    {isLoading ? 'Loading...' : children}
  </div>
)

export default Name
