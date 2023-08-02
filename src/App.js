import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from "./vistas/About"
import Detail from './vistas/Detail';
import Form from "./components/Form/Form"
function App() {
  
   const location = useLocation();

   const [characters,setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const  onClose = (id) => {
 setCharacters(characters.filter(char => char.id !== id)) ;
   };  

   return (
      <div className='App'>
        { location.pathname !== "/" && <Nav onSearch={onSearch} />}
         <Routes>

            <Route path="/" element={<Form/>} />

            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} /> 
             
            <Route path="/about" element={<About/>} />
            
            <Route path="/detail/:id" element={<Detail/>} />
          
         </Routes>

         
      </div>
   );
}

export default App;
