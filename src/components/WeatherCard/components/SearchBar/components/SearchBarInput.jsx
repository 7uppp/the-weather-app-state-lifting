import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBarInput = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const SearchInputHandler = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleClick = () => {
    const url = new URL(window.location.href)
    url.searchParams.set('city', input)
    navigate(url.pathname + url.search)
  }

  return (
    <div className="flex w-full items-center">
      <input
        type="text"
        placeholder="Search for city ..."
        className="focus:outline-none text-black w-full"
        onChange={SearchInputHandler}
        value={input}
      />
      <SearchIcon onClick={handleClick} />
    </div>
  )
}

export default SearchBarInput
