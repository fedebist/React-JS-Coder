import SearchIcon from '@mui/icons-material/Search';

const SearchForm = () => {
    const handleEvent= (evt) =>{
      /*   if(evt.keyCode === 32 || 65 || 69 ||  73 || 79 || 85) evt.preventDefault(); */
        console.log(evt.keyCode);
      }
    
    return(
        <div class='SearchContainer'>
        <input onKeyDown={handleEvent} class="inputSearch" type="search" placeholder="Buscar producto" aria-label="Search"></input>
        <SearchIcon />
        </div>
        
    )
};

export default SearchForm;