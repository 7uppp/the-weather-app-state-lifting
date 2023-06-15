import { useEffect, useState } from 'react'
import WeeklyDayCard from './WeeklyDayCard/WeeklyDayCard'
import Title from '@/components/Title'
import { getWeeklyWeather } from '@/api/currentCityCall'

const WeeklyCard = ({ city, setLoading }) => {
  const [weeklyWeather, setWeeklyWeather] = useState([])

  useEffect(() => {
    getWeeklyWeather(city)
      .then((data) => {
        setWeeklyWeather(data)
        console.log(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [city])

  return (
    <div className="flex flex-col xl:ml-0 ml-8 ">
      <Title title={'7-DAY-FORECAST'} className={'mt-8'} />
      <div className="flex flex-col">
        {weeklyWeather.map((dayWeather, index) => {
          // console.log(dayData)
          return <WeeklyDayCard key={index} dayWeather={dayWeather} />
        })}
      </div>
    </div>
  )
}

export default WeeklyCard
