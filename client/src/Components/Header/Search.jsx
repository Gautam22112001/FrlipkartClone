import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left:10px;
  display: flex;
`
const InputSearchBase = styled(InputBase)`
  width: 100%;
  padding-left: 20px;
  font-size: unset;
`
const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex; // to reduce the height of the search bar
`



const Search = () => {
  return (
    <SearchContainer>

      <InputSearchBase  
        placeholder="Search for products,brand and more."
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>

  )
};

export default Search;
