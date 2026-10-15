import { useState } from 'react'
import {useRef} from "react"
//components
import { BarNav } from '../components/navbar';
import { Animated } from '../components/animated';
import { motion } from "motion/react";
import { Project_Card } from '../components/project_Card';
import {Tabs_ } from '../components/tabs';
import {Readmd} from '../components/RMtab';
import { Project_Section } from '../components/project_section';
import { Video_Card } from '../components/video';
//resources
import coffee from "../src/img/Office_Coffee_NEW.png"
import logoproject2 from "../src/img/logoproject2.png"
import coffeepreview from "../src/img/office_coffee.mov"
import Logos from "../src/img/holiday_mirage.png"
import reactlogo from "../src/img/5.png"
import bootstraplogo from "../src/img/react_boots.png"
import csslogo from "../src/img/4.png"
import mysqllogo from "../src/img/mysql.png"
import introimg from "../src/img/DEV.png"
import preview from "../src/img/holidayreviewshot.mp4"
import holidaylogo from "../src/img/Logo5.png"
import laneway from "../src/img/laneway_logo.png"


//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  




import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import { Container, Col, Row, Button} from 'react-bootstrap';
import { width } from '@fortawesome/free-brands-svg-icons/fa11ty';

/*        <h1>OLD </h1>
<Container>
  <Row>
    <Col>
<div className='project-cont'>
<Tabs_ tabs={tabData1}/>
</div>
</Col>
<Col>
<div className='project-cont'>
<Tabs_ tabs={tabData2}/>
</div>
</Col>
</Row>
</Container>*/

function App(params) {
   const projectRef = useRef(null);
    const contactRef = useRef(null);
    const scrollDown = (element) => {
    // 2. Verifica que la referencia exista y ejecuta el scroll
    if (element.current) {
      element.current.scrollIntoView({ 
        behavior: 'smooth', // Animación suave ('smooth') o instantánea ('instant')
        block: 'start'      // Alinea el elemento al inicio ('start'), centro ('center') o final ('end')
      });
    }
  }
  return (
    <>
      <BarNav Projectscroll={() => scrollDown(projectRef)} Contactscroll={() => scrollDown(contactRef)}/>
      <main>
        <div className='introduction'>
          <div className='intro-img'>
          <img src={introimg} width="450px"/>

        </div>
        
        <div className='description'>
          <h3>Welcome to my portfolio Web!</h3>
    <p>Curious and enthusiastic React Developer interested in application logic and clean frontend code! Always taking the initiative to spin up new portfolio projects to master modern development best practices. </p>
    <p>
      Head over to my <a href="https://github.com/becca1709">GitHub</a> to explore my code or keep scrolling to see the overview of my experience and let's launch my career together!
    </p>
        
        <h3>Some of the tools I am familiar with</h3>
        <ul className='intro-logos'>
          <li><img src={reactlogo} alt="react logo"/></li>
          <li><img src={bootstraplogo} alt="react_bootstrap_logo" id="boots"/></li>
           <li><img src={csslogo} alt="css logo"/></li>
            <li><img src={mysqllogo} alt="mysql_logo" id="mysql"/></li>
        </ul>
        </div>
        
    </div>
    <div className='education'> 
      <h1 id="section-name">E D U C A T I O N</h1>
      <div className='edu-cont'>
      <img src={laneway} width="100px"/>
       <h3>Laneway Education</h3>
      <h4>Diploma of Information Technology Front End and Back End Web Development</h4>
      <h5>JAN 2024 - JAN 2026</h5>

      </div>
    </div>
    <div className='projects' ref={projectRef}>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5 }}
      >
<Project_Section/>

</motion.div>
    </div>
    <div className='Process'> 
<h1 id="section-name">P R O C E S S</h1>
  <div className='pro-description'>
  <div className="ai-cont">
    <h3>AI-Assisted Development</h3>
     <p>I lead the complete design of the core architecture, visual design, and component development across projects, strategically leveraging AI tools to accelerate problem-solving.</p>
  <p>Utilized AI as a real-time partner for debugging complex technical issues, validating syntax, and deepening comprehension of new concepts—allowing for faster iteration while maintaining complete ownership of the codebase.</p>
  <h3>AI-Integration</h3>
  <p>Actively expanding expertise in embedding AI capabilities directly into web applications—focusing on API integrations (e.g., OpenAI, Anthropic), prompt orchestration, and intelligent feature implementation through hands-on project builds.</p>
  </div>
        
  <div className='steps-cont'>
        <h2>Development process</h2>
<div class="process-card">
   <span class="step-number">01</span>
      <h4>Plan & Architect</h4>
      <p>Understanding the main goal of the project, considering time constraints and financial resources, designing database schemas, and defining component hierarchies before writing code.</p>
    </div>
    <div class="process-card">
      <span class="step-number">02</span>
      <h4>Build & Integrate</h4>
      <p>Developing modular UI components and connecting front-end interfaces to back-end services with REST APIs. Reading documentation of new technical tools appropiate to the project that is being built. Using AI tools to expand my understanding of challenges in the process of devolpment.</p>
    </div>
    <div class="process-card">
      <span class="step-number">03</span>
      <h4>Debug & Optimize</h4>
      <p>Identifying root causes, isolating errors, and elevating code quality before deployment. 
        When bugs or edge cases arise, I inspect browser developer tools, trace network requests, and leverage AI as a diagnostic partner to validate syntax and clarify underlying technical concepts.
         Once resolved, I refine the solution—cleaning up leftover logs, refactoring component logic, and ensuring data flows predictably—so the codebase remains clean, readable, reliable, and maintainable.</p>
    </div>
    <div class="process-card">
      <span class="step-number">04</span>
      <h4>Deploy & Reflect</h4>
      <p>When possibble, shipping to cloud hosting platforms, conducting integration testing, and capturing key lessons for continuous growth.</p>
    </div>
      </div>
    </div>
    </div>
 <div className='contact' ref={contactRef}>
<h1 id="section-name">C O N T A C T </h1>
      <div className='contact-cont'>
      
      <h4> <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "rgb(87, 125, 186)",}}/>  rojasbecca27@gmail.com</h4>
 <a href="https://www.linkedin.com/in/rebeccarojas/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="xl"style={{color: "rgb(87, 125, 186)",}} />LinkedIn</a>
 
        <a href="https://github.com/becca1709" target="_blank"> <FontAwesomeIcon icon={faGithub} size="xl" style={{color: "rgb(87, 125, 186)",}} /> GitHub</a>
      </div>

    </div>
      </main>
    </>
  )
}

export default App
