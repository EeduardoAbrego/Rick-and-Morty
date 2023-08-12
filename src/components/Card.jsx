import { Link } from "react-router-dom";
import { addFav , removeFav } from "../redux/action"
import { connect } from "react-redux";
import { useState , useEffect} from "react";


 function Card({id, name, status, species, gender, image, onClose, removeFav, addFav, myFavorites}) {
 
 const [isFav, setIsFav] = useState(false);

 const handleFav = () => {
   if (isFav) {
      setIsFav(false);
      removeFav(id)
   }
   else {
     setIsFav(true);
     addFav({id, name, status, species, gender, image})
   }
 }

 useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div>
        { isFav ? (
      <button onClick={handleFav}>❤️</button>
   ) : (
      <button onClick={handleFav}>🤍</button>
   )} 
         <button onClick={ () => onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
         <h2>{name} </h2>
         </Link>
         <h2>{status} </h2>
         <h2>{species} </h2>
         <h2>{gender} </h2>
         <h2>{origin.name} </h2>
         <img src={image} alt='' /> 
      </div>
   );

 }

 export function mapDispatchToProps (dispach) {
   return {
    addFav: function (character ) {
       dispach(addFav(character))
    },
    
    removeFav: function (id) {
       dispach(removeFav(id))
    }
 }}

export function mapStateToProps (state) {
    return {
       myFavorites: state.myFavorites
    }
 }

export default connect(mapStateToProps ,mapDispatchToProps )(Card)