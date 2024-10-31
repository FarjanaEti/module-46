import { useState } from "react"

const useInputState=(defaultValue)=>{
   const [value,setValue]=useState(defaultValue);

   const onChange=e=>{
        setValue(e)                      
   }
//    const handleChange=e=>{
//         setValue(e)                      
//    }
return{
    value,
    onChange
} 
}
export default useInputState;                         