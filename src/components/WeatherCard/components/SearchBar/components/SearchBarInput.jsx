import { useContext } from 'react'
import { WeatherContext } from '../../../../../../src/context/WeatherContext'

const SearchBarInput = () => {
  const { setProperty } = useContext(WeatherContext)

  const SearchInputHandler = (e) => {
    e.preventDefault()
    setProperty('city', e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Search for city ..."
      className="focus:outline-none text-black w-full"
      onChange={SearchInputHandler}
    />
  )
}

export default SearchBarInput
