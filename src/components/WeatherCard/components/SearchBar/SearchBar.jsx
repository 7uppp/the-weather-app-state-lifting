import ContentBox from '../../../contentBox/ContentBox'
import SearchBarInput from './components/SearchBarInput'

const SearchBar = () => {
  return (
    <div className="w-full mb-12 ">
      <ContentBox className="flex items-center">
        <SearchBarInput />
      </ContentBox>
    </div>
  )
}

export default SearchBar
