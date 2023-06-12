import ContentBox from '../../../contentBox/ContentBox'
import SearchBarInput from './components/SearchBarInput'

const SearchBar = ({ setCity }) => {
  return (
    <div className="w-full mb-12 ">
      <ContentBox className="flex items-center">
        <SearchBarInput setCity={setCity} />
      </ContentBox>
    </div>
  )
}

export default SearchBar
