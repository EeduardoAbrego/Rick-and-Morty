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
   const [charHr, setCharHr] = useState([]);
   
  async function  onSearch(id) {
  try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
       setCharacters((oldChars) => [...oldChars, data]);
      }
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
   }
    /*  .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });*/
      
   }
//
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

   function onSearch2 () {
      axios( "https://hp-api.onrender.com/api/characters/").then(({ data }) => {
         if (data) {
            setCharHr(data);
         } else {
            window.alert('¡No hay personajes!');
         }
      });
   }
   
   const  onClose = (id) => {
 setCharacters(characters.filter(char => char.id !== id)) ;
 setOldChars(oldChars.filter(char => char.id !== id)) ;
 setCharHr(charHr.filter(char => char.id !== id)) ;

   };  

   const onCloseAll = () => {
      setCharacters([]) ;
 setOldChars([]) ;
 setCharHr([]) ;
   }

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'eduardoabrego11@gmail.com';
   const PASSWORD = 'Vicky1392$&';

  /*function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
 }*/
  async function login(userData) {
   const { email, password } = userData;
   try {
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         window.alert('¡Email o Password invalidos!');
   }
   ;
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
        { location.pathname !== "/" && <Nav onCloseAll={onCloseAll} onSearch2={onSearch2} onSearch1={onSearch1}  onSearch={onSearch} logOut={logOut}  />}
         <Routes>

            <Route path="/" element={<Form login={login} />} />

            <Route path="/home" element={<Cards  charHr={charHr} oldChars={oldChars} characters={characters} onClose={onClose}/>} /> 
             
            <Route path="/about" element={<About/>} />
            
            <Route path="/detail/:id" element={<Detail setCharHr={setCharHr} charHr={charHr} />} />

            <Route  path="/favorites"  element={<Favorites/>} />
          
         </Routes>

         
      </div>
   );
}

export default App;
