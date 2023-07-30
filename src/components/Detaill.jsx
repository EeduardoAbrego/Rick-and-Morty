import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
 function Detaill () {
  const [character, setCharacter] = useState([])
  const  {id} = useParams();
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
    }, [id]);

     return (
         <h1>
          {character.name && <p>Name: {character.name}</p>}
          {character.status && <p>Status: {character.status}</p>}
          {character.species && <p>Species: {character.species}</p>}
          {character.gender && <p>Gender: {character.gender}</p>}
          {character.origin && character.origin.name && <p>Origin: {character.origin.name}</p>}
          {character.image && <img src={character.image} alt="Character" />}
          </h1>
        )
    };

 export default Detaill;