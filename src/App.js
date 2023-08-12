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
        { location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
         <Routes>

            <Route path="/" element={<Form login={login} />} />

            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} /> 
             
            <Route path="/about" element={<About/>} />
            
            <Route path="/detail/:id" element={<Detail/>} />

            <Route  path="/favorites"  element={<Favorites/>} />
          
         </Routes>

         
      </div>
   );
}

export default App;
