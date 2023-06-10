import WeeklyDayCard from './WeeklyDayCard/WeeklyDayCard'

const WeeklyCard = ({ weeklyData }) => {
  console.log(weeklyData)
  return (
    <div className="flex flex-col">
      {weeklyData.map((dayData, index) => {
        // console.log(dayData)
        return <WeeklyDayCard key={index} dayData={dayData} />
      })}
    </div>
  )
}

export default WeeklyCard
