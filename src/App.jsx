// import { useState } from 'react';
import viteLogo from '/vite.svg';
import flower from './assets/flower.svg';

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='card1'>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={flower} className="logo" alt="hotels" title="react Logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card1">
        <div className="appName1">React Application 1</div>
        <div>
        <a target="_blank" href="https://main.d1294rbaaroizz.amplifyapp.com/">Hosted on AWS</a>
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
