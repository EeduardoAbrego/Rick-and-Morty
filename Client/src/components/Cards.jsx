import Card from './Card';
import style from "./style/Cards.module.css"

export default function Cards({characters, onClose ,oldChars, charHr }) {
   return(
   <div  >
       
       {oldChars.map(character => (
         <div className={style.container}>
      <Card 
      key = {character.id}
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin}
      image={character.image}
      onClose={onClose}
      />
      </div>
      ))}

      {charHr.map(character => (
         <div className={style.container}>
      <Card 
      key = {character.id}
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin}
      image={character.image}
      onClose={onClose}
      />
      </div>
      ))}

      {characters.map(character => (
         <div className={style.container}>
      <Card 
      key = {character.id}
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin}
      image={character.image}
      onClose={onClose}
      />
      </div>
      ))}
      
   </div>)

}
