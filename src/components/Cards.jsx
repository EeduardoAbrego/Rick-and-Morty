import Card from './Card';

export default function Cards(props) {
   return <div>
      {props.characters.map(( person )=>{
         return <div> 
            <hr/>
            <Card key={person.id}
            props= {person}
           onClose={props.onClose}
         />
          <hr/>
         </div>
      } )}
   </div>;
}
