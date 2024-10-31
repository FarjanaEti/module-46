import useInputState from "../hook-folder/useInput";

const Hook = () => {
       const emailState=useInputState('eti')                      
     const handleSubmit=e=>{
        e.preventDefault();
        console.log(emailState.value)                      
     }
                              
  return (
   <div>
     <h4 className="text-2xl text-orange-950 text-center">Customize Hook</h4>
      <form onSubmit={handleSubmit} className="items-center text-center" action="">
         <input  type="text" {...emailState} name="name"/> 
         <br />                   
         <input  name="email" type="email" /> 
         <br />                    
         <input className=" my-2 border" name="password" type="password" />
         <br />
         <input  type="submit" />                     
     </form>                                                                                          
   </div>
);
};

export default Hook;