
const SimpleForm = () => {
   const handleSubmit=e=>{
    e.preventDefault();
    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.password.value)
   }
   return (
   <div>
      <h3 className="font-bold text-3xl text-center text-orange-800">Form</h3>
        <h4 className="text-2xl text-orange-950 text-center">Simple Form</h4>
      <form onSubmit={handleSubmit} className="items-center text-center" action="">
         <input className=" border" type="text" placeholder="name" name="name"/> 
         <br />                    
         <input className="my-2 border" name="email" type="email" /> 
         <br />                    
         <input className=" my-2 border" name="password" type="password" />
         <br />
         <input  type="submit" />                     
     </form>                                                                                    
 </div>
 );
};

export default SimpleForm;