import { Link, useLocation } from "react-router-dom";
import { addFav , removeFav } from "../redux/action"
import { connect } from "react-redux";
import { useState , useEffect} from "react";
import style from "./style/Card.module.css"

 function Card({id, name, status, species, gender, image, onClose, removeFav, addFav, myFavorites}) {
 console.log(id)
   const location = useLocation();

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
      <div className={style.container}>
         <div className={style.element} >
        { isFav ? (<button  className={style.boton} onClick={handleFav}>❤️</button> ) : (
      <button  className={style.boton} onClick={handleFav}>🤍</button> )} 
         {  location.pathname !== "/favorites"  ? (<button  className={style.boton} onClick={ () => onClose(id)}>❌</button>) : ( <> </>) }
         <Link to={`/detail/${id}`} >
         <h2>{name} </h2>
         </Link>
         <img className={style.img} src={image} alt='' /> 
         </div>
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