import SearchBar from "./SearchBar"

function Nav({onSearch}) {
   return (
     
       <nav>
        <SearchBar onSearch={onSearch} />
       </nav>
       
    ) ;
}


export default Nav;