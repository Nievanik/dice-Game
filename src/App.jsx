import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Main from './components/Main/Main'

function App() {
  let [home, setHome] = useState(true);

  const playGame = ()=>{
    setHome(false);
  }

  return (
    <>
    {home?<Home playGame={playGame}/>:<Main/>}
    
    
    </>
  )
}

export default App
