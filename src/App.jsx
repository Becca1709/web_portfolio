import { useState } from 'react'
import { BarNav } from '../components/navbar';
import { Animated } from '../components/animated';
import { motion } from "motion/react";
import { Project_Card } from '../components/project_Card';
import coffee from "../src/img/Office_Coffee.png"
import logoproject2 from "../src/img/logoproject2.png"
import coffeepreview from "../src/img/office_coffee.mov"
import Logos from "../src/img/logos.png"
import preview from "../src/img/holidayreviewshot.mp4"
import holidaylogo from "../src/img/Logo5.png"
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'


function App(params) {
 
  return (
    <>
      <BarNav/>
      <main>
        <div className='introduction'>
          <div className='intro-img'>
          <img src="../src/img/DEV.png" width="450px"/>

        </div>
        
        <div className='description'>
          <h3>Welcome to my portfolio Web!</h3>
    <p>Curious and enthusiastic React Developer interested in application logic and clean frontend code! Always taking the initiative to spin up new portfolio projects to master modern development best practices. </p>
    <p>
      Head over to my <a href="https://github.com/becca1709">GitHub</a> to explore my code or keep scrolling to see the overview of my experience and let's launch my career together!
    </p>
        
        <h3>Some of the tools I am familiar with</h3>
        <ul>
          <li><img src="../src/img/5.png" alt="react logo"/></li>
          <li><img src="../src/img/react_boots.png" alt="react_bootstrap_logo" id="boots"/></li>
           <li><img src="../src/img/4.png" alt="css logo"/></li>
            <li><img src="../src/img/mysql.png" alt="mysql_logo" id="mysql"/></li>
        </ul>
    
        </div>
        
    </div>
    <div className='education'> 
    </div>
    <div className='projects'>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5 }}
      >
         <Project_Card projectlogo={coffee}
problems= "A coffee morning rush at the office cafe can hold employees waiting in line or not getting their morning coffee at all." 
solutions="Making coffee ordering easier in the corporate world by creating a user friendly coffee ordering system that remembers your favorite coffee order but also allows you to change your order at anytime." 
img_id="tools" img_src={logoproject2} 
videosrc={coffeepreview}/>
    <Project_Card projectlogo={holidaylogo}
problems= " Due to increasing concerns about our digital safety, sharing
                  our memories doesn't feel like a decision to make lightly
                  anymore. Our memories can easily be lost in the endless storage of the
                  cloud." 
solutions=" Creating a digital album to keep our private memories
                  organized without the risks of sharing them publicly.
                  A modern solution for the digital nomad that values online
                  safety while cherishing their best memories." 
img_id="tools" img_src={Logos} 
videosrc={preview}/>
</motion.div>
    </div>
    
 <div className='contact'>

    </div>
      </main>
    </>
  )
}

export default App
