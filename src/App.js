import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useEffect ,useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from "./vistas/About"
import Detail from './vistas/Detail';
import Form from "./components/Form/Form"
import Favorites from './components/Favorites';
function App() {
  
   const location = useLocation();

   const [characters,setCharacters] = useState([]);
   const [oldChars , setOldChars] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      
   }
//https://hp-api.onrender.com/api/characters
   function onSearch1 () {
      let n = 1;
      while(n <= 826 ) {
      axios( `https://rickandmortyapi.com/api/character/${n}`).then(({ data }) => {
         if (data) {
            setOldChars((oldChar) => [...oldChar, data]);
         } else {
            window.alert('¡No hay personajes!');
         }
      });
      n+= 1;
   }
      console.log(oldChars)
   }
   
   const  onClose = (id) => {
 setCharacters(characters.filter(char => char.id !== id)) ;
 setOldChars(oldChars.filter(char => char.id !== id)) ;

   };  

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'eduardoabrego11@gmail.com';
   const PASSWORD = 'Vicky1392$&';

  function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
 }  
   useEffect(() => {
    !access && navigate('/');
   }, [access]);

   const logOut = () => {

      setAccess(false);
      navigate('/');

   }


   return (
      <div className='App'>
        { location.pathname !== "/" && <Nav onSearch1={onSearch1}  onSearch={onSearch} logOut={logOut}  />}
         <Routes>

            <Route path="/" element={<Form login={login} />} />

            <Route path="/home" element={<Cards  oldChars={oldChars} characters={characters} onClose={onClose}/>} /> 
             
            <Route path="/about" element={<About/>} />
            
            <Route path="/detail/:id" element={<Detail/>} />

            <Route  path="/favorites"  element={<Favorites/>} />
          
         </Routes>

         
      </div>
   );
}

export default App;
