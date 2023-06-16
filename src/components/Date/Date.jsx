const Date = ({ date, isLoading }) => {
  return <div className="text-white">{isLoading ? 'Loading' : date}</div>
}

export default Date
