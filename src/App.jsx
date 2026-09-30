import { useState } from 'react'
import { BarNav } from '../components/navbar';
import { Animated } from '../components/animated';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'

function App() {
 
  return (
    <>
      <BarNav/>
      <main>
        <div className='introduction'>
          <div className='I-am'>
        <h3>Welcome to my portfolio Web!</h3>
        <div className='description'>
    <p>Curious and enthusiastic React Developer interested in application logic and clean frontend code! Always taking the initiative to spin up new portfolio projects to master modern development best practices. </p>
    <p>
      Head over to my <a href="https://github.com/becca1709">GitHub</a> to explore my code or keep scrolling to see the overview of my experience and let's launch my career together!
    </p>
        </div>
        <h3>Some of the tools i am familiar with</h3>
        <ul>
          <li><img src="../src/img/5.png"/></li>
           <li><img src="../src/img/4.png"/></li>
            <li><img src="#" alt="bootstrap"/></li>
            <li><img src="#" alt="mysql"/></li>
        </ul>
       
        </div>
        <div className='intro-img'>
          <img src="../src/img/DEV.png" width="450px"></img>

        </div>
    </div>
    <div className='education'> 
 <button className="btn btn-success btn-lg">Bootstrap is Working! 🎉</button>
    </div>
    <div className='projects'>
<Animated/>
<Animated/>
    </div>
 <div className='contact'>

    </div>
      </main>
    </>
  )
}

export default App
