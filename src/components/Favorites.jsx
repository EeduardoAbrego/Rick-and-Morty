import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "./Card"
import { filterCards, orderCards } from "../redux/action";

function Favorites({myFavorites}) {

    const [aux , setAux] = useState(false);
  
    const dispatch = useDispatch();

    const handleOrder = (e) => {
         const {value} = e.target;
         setAux(!aux)
         dispatch(orderCards(value));
    };

    const handleFilter = (e) => {
        const {value} = e.target;
        setAux(!aux)
        dispatch(filterCards(value));
    };


    return(
        <div>
              <>
              <select onChange={handleOrder} >
              <option value="A">Ascendente</option>
              <option value="D">Descendente</option>
              </select>
              <select onChange={handleFilter} >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderles</option>
              <option value="unknown">unknow</option>
              </select>
              </>
              {myFavorites?.map(({name, status, species, image, id})=> (
                <>
                <hr/>
                <Card
                key={id}
                name={name}
                image={image}
                id={id}
                />
                <hr/>
                </>
            )) }
        </div>
    )
    }  
 
    


export function mapStateToProps(state){
return {
    myFavorites: state.myFavorites,
}
};
export default connect(mapStateToProps)(Favorites);