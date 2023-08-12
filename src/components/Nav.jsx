import SearchBar from "./SearchBar"
import { Link, useNavigate } from "react-router-dom";




function Nav({onSearch, logOut }) {

    const handlesubm = (event) => {

        event.preventDefault();
        logOut();
       }

    return (
        <div>
        <button type="submit" onClick={handlesubm} > Log Out </button>
         <Link to="/about" >
         <p>About</p>
         </Link>
         <Link to="/favorites"  >
        <p>❤️</p>
         </Link>
         <Link to="/home">
         <p>Home</p> 
         </Link>
        <SearchBar onSearch={onSearch} />
        </div>
       
    ) ;
}


export default Nav;