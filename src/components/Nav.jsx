import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <div>
         <Link to="/about" >
         <p>About</p>
         </Link>  
         <Link to="/home">
         <p>Home</p> 
         </Link>
        <SearchBar onSearch={props.onSearch} />
        </div>
       
    ) ;
}


export default Nav;