import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";




function Nav({onSearch, logOut, onSearch1, onSearch2, onCloseAll}) {

   

    const handlesubm = (event) => {

        event.preventDefault();
        logOut();
       }

    return (
        <div  >

         <Link to="/home">
         <p >Home</p> 
         </Link>
         <Link to="/favorites"  >
        <p  >❤️</p>
         </Link>
         <Link to="/about" >
         <p  >About</p>
         </Link>
         <button onClick={()=> {onCloseAll()}} >Close All </button>
         <button onClick={()=> {onSearch2()}} >All H-P</button>
          <button  onClick={()=> {onSearch1()}} > All </button>
        <SearchBar onSearch={onSearch} />
        <button type="submit" onClick={handlesubm}  > Log Out </button>
        </div>
       
    ) ;
}


export default Nav;