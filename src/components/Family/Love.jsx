import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Love = () => {
 const gift=useContext(AssetContext)
  return (
   <div className="border my-5">
         <h4>My Love</h4> 
         <h6>Has:{gift}</h6>                                                                                
   </div>
 );
};

export default Love;