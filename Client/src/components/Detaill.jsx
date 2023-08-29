import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./style/datail.module.css"
 
 function Detaill ({setCharHr, charHr}) {
  const [character, setCharacter] = useState([])
  const  {id} = useParams();
  useEffect(() => {
   console.log(id)
   if(isNaN(id)) {
       setCharHr(charHr.filter((char)=> char.id === id ))
      
    }
    else {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
   }
   }, [id]);

     return (
         <div className={style.container }> 
         <div className={style.texto} >
         {character.name && <p> {character.name}</p>}
          {character.status && <p>Status: {character.status}</p>}
          {character.species && <p>Species: {character.species}</p>}
          {character.gender && <p>Gender: {character.gender}</p>}
          {character.origin && character.origin.name && <p>Origin: {character.origin.name}</p>}
         </div>
         <div className={style.imagen} >
         {character.image && <img src={character.image} alt="Character" />}
         </div>
         </div>
        )
    };

 export default Detaill;