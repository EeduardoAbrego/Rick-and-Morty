import { useState } from "react";

const validate = (userData, proper, errors, setErrors) => {

   if(proper === "email"){
   if (!userData.email) setErrors({...errors, email:"Ingrese su Email"});
     else {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email))
        setErrors({...errors, email:"Email valido"});
        else setErrors({...errors, email:"Email invalido"});
     }
   }
      else {
     const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  
      if (!userData.password) setErrors({...errors, password:"Ingrese su Password"});
     else {
        if(userData.password.match(decimal))
        setErrors({...errors, password:"Password valida"});
        else setErrors({...errors, password:"Password invalida"});
     } ;
   }
  }
const Form = () => {

     const [userData, setUserData] = useState({
        email: "" ,
        password: "",
     }); 

     const [errors, setErrors] = useState({
      email: "" ,
      password: "",
     });

     


     const handleChange = (event) => {
       const proper = event.target.name;
       const value = event.target.value;
        
       setUserData({...userData, [proper]:value });
       
       validate({...userData, [proper]:value },proper, errors, setErrors );
     }

    return (
       <form>
          <div>
             <label htmlFor="email">Email</label>
             <input type="text" name="email" value={userData.email} onChange={handleChange} />
             <span>{errors.email} </span>
           </div>
       
          <div>
             <label htmlFor="password" >Password </label>
             <input type="text" name="password" value={userData.password} onChange={ handleChange} />
             <span>{errors.password} </span>
           </div>

          <div>
             <button> Submit </button>
           </div>
        </form>
      );
   };
  
   export default Form;