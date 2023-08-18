import Card from './Card';
import style from "./style/Cards.module.css"

export default function Cards({characters, onClose ,oldChars}) {
   return(
   <div className={style.container} >
       
       {oldChars.map(character => (
         <>
      
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
      
      </>
      ))}

       {characters.map(character => (
         <>
      
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
      
      </>
      ))}
      
   </div>)

}
