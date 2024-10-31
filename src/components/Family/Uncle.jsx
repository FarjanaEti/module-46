import Cousine from "./Cousine";

const Uncle = () => {
   return (
      <div className="p-3 border text-2xl text-center font-bold text-blue-400">
           <h2>Uncle</h2>
           <div className="text-stone-700 flex justify-between p-3">
            <Cousine></Cousine>                  
            <Cousine></Cousine>                                   
         </div>                                                                               
 </div>
                              );
};

export default Uncle;