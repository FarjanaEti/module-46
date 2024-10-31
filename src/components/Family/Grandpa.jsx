import { createContext } from "react";
import Auntie from "./Auntie";
import Papa from "./Papa";
import Uncle from "./Uncle";

 export const AssetContext=createContext("gold")
const Grandpa = () => {
   const asset='gold';
 return (
    <div className=" p-5">
      <h1 className="text-center font-bold text-3xl">Grandpa</h1> 
      <AssetContext.Provider value="gold">
      <div className="border border-gray-950 p-5 flex justify-between">  
        <Papa asset={asset}></Papa>                     
        <Auntie></Auntie>   
        <Uncle></Uncle>                                                     
     </div>                              
    </AssetContext.Provider>                                                                       
 </div>
  );
};

export default Grandpa;