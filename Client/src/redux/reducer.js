import { ADD_FAV , REMOVE_FAV , ORDER, FILTER} from "./action"


 const initialState = {
    myFavorites: [],
    allCharacters: []
 };

 const reducer = (state=initialState,action ) => {
  switch (action.type) {
    case ADD_FAV:
        return {...state, allCharacters:[...state.allCharacters, action.payload], myFavorites:[...state.allCharacters, action.payload] };
        
    case REMOVE_FAV:
         return {...state, myFavorites: state.myFavorites.filter((char) => char.id !== Number(action.payload)) 
         };

    case FILTER:
        const charFilter = [...state.allCharacters].filter((char)=> char.gender === action.payload)    
          return {
            ...state,
            myFavorites:charFilter
          };
    
    case ORDER:
      const charSort = [...state.allCharacters].sort((a,b)=> {
        if(action.payload === "A") {
            return a.id > b.id ? 1 : -1
        } else {
            return a.id < b.id ? 1 : -1
        }
        });
        return {
            ...state,
            myFavorites:charSort
        }  
    
    default:
        return { ...state}
    }

 };

 export default reducer;