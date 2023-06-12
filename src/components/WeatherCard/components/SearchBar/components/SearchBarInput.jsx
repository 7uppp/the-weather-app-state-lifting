import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const SearchBarInput = ({ setCity }) => {
  const [input, setInput] = useState('')

  const SearchInputHandler = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleClick = () => {
    setCity(input)
    setInput('')
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
