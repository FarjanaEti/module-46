
import './App.css'
import Grandpa from './components/Family/Grandpa'
import Hook from './components/Hook'
import Individualstate from './components/Individualstate'
import SimpleForm from './components/SimpleForm'

function App() {
 
  return (
    <>
      <h1>Vite + React</h1>
     <div className='w-2/3 mx-auto border'>
     <SimpleForm></SimpleForm> 
     <Individualstate></Individualstate>
     <Hook></Hook>
     </div>

     <div className='border border-red-900 my-10 w-3/4 mx-auto'>
      <Grandpa></Grandpa>
     </div>
    </>
  )
}

export default App
