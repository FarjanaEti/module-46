
import './App.css'
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
    </>
  )
}

export default App
