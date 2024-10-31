import { useState } from "react";

const Individualstate = () => {
    const [name, setName]=useState("")
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState("")
    const [error,seterror]=useState("")

   const handleSubmit=e=>{
     e.preventDefault();
     if(password.length<6){
         seterror("Password must be 6 didgit")                     
        }     
        else{
         seterror('')
         console.log(name,email,password)
      }           
   }
   const handleChangeName=e=>{
      //console.log(e.target.value) protibar type a console hobe      
    setName(e.target.value)
   }
   const handleChangeEmail=e=>{
      setEmail(e.target.value)
   }
   const handleChangePassword=e=>{
      setPassword(e.target.value) 
   }
   return (
  <div>
       <h4 className="text-center text-2xl text-orange-950">Individual State</h4>  
       <form onSubmit={handleSubmit} className="text-center space-y-3" action="">
          <input onChange={handleChangeName} value={name} type="text" name="name" />  <br />                  
          <input onChange={handleChangeEmail} type="email" name="email"/> <br />                   
          <input onChange={handleChangePassword} type="password" /> <br />                   
          <input type="submit" />                    
            {
              error && <p>{error}</p>                
            }                  
      </form>                                                                               
  </div>
 );
};

export default Individualstate;