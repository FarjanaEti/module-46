import Brother from "./Brother";
import Me from "./Me";
import Mom from "./Mom";

const Papa = () => {
  return (
  <div className=" border text-2xl font-bold text-center text-blue-400">
     <h2>Papa</h2> 
     <div className="flex justify-between my-5">
     <Me></Me> 
     <Mom></Mom>
     <Brother></Brother>                     
    </div>                                                                                   
  </div>
 );
};

export default Papa;