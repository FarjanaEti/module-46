import Cousine from "./Cousine";

const Auntie = () => {
   return (
    <div className="p-3 text-center border text-2xl font-bold text-blue-400">
        <h2>Auntie</h2> 
        <div className="text-orange-700 flex justify-between p-3">
       <Cousine></Cousine>                       
       <Cousine></Cousine>                       
       <Cousine></Cousine>                       
      </div>                                                                                 
  </div>
  );
};

export default Auntie;