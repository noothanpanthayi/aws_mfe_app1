// import { useState } from 'react';
import viteLogo from '/vite.svg';
import flower from './assets/flower.svg';

import './App.css'

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='cardMain'>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={flower} className="logo" alt="hotels" title="react Logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div onClick={()=>window.open('https://main.d1294rbaaroizz.amplifyapp.com/')} 
      className="card1"
        title="Navigate to Application 1 in AWS">
        <div className="appName1">React Application 1</div>
        <div className='link' title="Navigate to React Application 1 in AWS">
   
        Hosted on AWS
   
         </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
