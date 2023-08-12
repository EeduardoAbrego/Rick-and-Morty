import React from "react";
import { connect } from "react-redux";
import Card from "./Card"

function Favorites({myFavorites}) {
    return(
        <div>
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