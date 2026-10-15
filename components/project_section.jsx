import react from "react"
import { Button, Container, Col, Row } from "react-bootstrap"
import { Project_Card } from "./project_Card";
import {Tabs_} from "./tabs";
import { Video_Card } from "./video";
import { Readmd } from "./RMtab";
import coffee from "../src/img/Office_Coffee_NEW.png"
import logoproject2 from "../src/img/logoproject2.png"
import coffeepreview from "../src/img/office_coffee.mov"
import Logos from "../src/img/holiday_mirage.png"
import preview from "../src/img/holidayreviewshot.mp4"
import holidaylogo from "../src/img/Logo5.png"




export function Project_Section(){

    const tabData1 = [
      { eventKey: 'home', title: 'Overview', content: <Project_Card projectlogo={coffee} style="200px"
    problems= "A coffee morning rush at the office cafe can hold employees waiting in line or not getting their morning coffee at all." 
    solutions="Making coffee ordering easier in the corporate world by creating a user friendly coffee ordering system that remembers your favorite coffee order but also allows you to change your order at anytime." 
    img_id="tools" img_src={logoproject2} 
     repo={"https://github.com/Becca1709/Coffee_app"}/> },
      { eventKey: 'profile', title: 'Video', content: <Video_Card videosrc={coffeepreview}/> },
      { eventKey: 'ReadMe', title: 'ReadMe', content: <Readmd name="Office Coffee" 
        description= "A mobile and web application designed exclusively for corporate campuses, allowing employees to customize and order coffee directly from their desks to skip the cafeteria lines and boost daily productivity. A full-stack, responsive web application designed for office environments to streamline coffee orders for the office. Built with React, Vite, Bootstrap, Node.js, Express, and MySQL."
 proto="Functional Prototype in Progress — Currently implements core CRUD functionality: adding new orders directly updates the MySQL database, and existing orders are dynamically fetched and displayed on the front end." 
 features={<ul><li>Add New Orders: Users can submit order details through a simple interface</li>
<li>Real-Time Data Display: View current office orders fetched directly from the database. </li> 
<li>Responsive Interface: Styled with Bootstrap for seamless use across desktop and mobile devices.</li> 
<li>RESTful API Backend: Express server handling client requests and database interactions.</li></ul>}
stackF={<ul><li>React (v18+)</li><li>Vite (Build tool)</li><li>React Router (Client-side routing)</li>
<li>Bootstrap (UI framework & responsive design)</li></ul>}
stackB={<ul><li>Nodejs</li><li>Express</li><li>MySQL</li></ul>}
learnings={<ul><li><strong>Environment Variables (.env):</strong> First time implementing environment variables to keep sensitive credentials (like database passwords and secret keys) safe and isolated.</li>
<li><strong>Git Security (.gitignore):</strong> Learning how to configure .gitignore properly to prevent pushing sensitive file paths, node modules, and credentials to public repositories.</li>
<li><strong>Full-Stack Integration:</strong> Solidified and improved my understanding of end-to-end full-stack communication—connecting a React front-end to a Node/Express REST API and managing persistent data with MySQL.</li></ul>}/> },
    ];
    
     
    const tabData2=[ { eventKey: 'home', title: 'Overview', content: <Project_Card projectlogo={holidaylogo} style="280px"
    problems= " Due to increasing concerns about our digital safety, sharing our memories it's not a decision to make lightly
                      anymore. Our memories can easily be lost in the endless storage of the cloud." 
    solutions=" Creating a digital album to keep our private memories organized without the risks of sharing them publicly.
                      A modern solution for the digital nomad that values online safety while cherishing their best memories." 
    img_id="tools" img_src={Logos} repo={"https://github.com/Becca1709/holiday_review_v1.4"}/> },
      { eventKey: 'profile', title: 'Video', content: <Video_Card videosrc={preview}/> },
      { eventKey: 'ReadMe', title: 'ReadMe', content: <Readmd name="Holidays Review" description= "A responsive, multi-page web application designed to seamlessly organize vacation photos into clean, custom albums. Users can create, update, read, and delete albums dynamically while managing their media assets through an intuitive interface."
        preview_web="https://codesandbox.io/p/sandbox/holiday-review-v1-4-k4lnxk" proto="Functional Prototype in Progress: Designed this project with a frontend-first approach using a mock API to perfect the user interface. Features like data persistence (updating records) and file uploads (attaching images) are simulated on the client side, serving as the blueprint for the next phase: integrating a live Node.js/SQL backend." 
        features={<ul><li>Simulated CRUD Architecture: Designed a full Create, Read, Update, and Delete workflow for photo albums; used a frontend-driven mock API to simulate real-time data flow while setting up the architectural blueprint for a live database.</li><li> Immersive Full-Screen Mode: Instantly expand and view individual photos in a high-resolution, full-screen viewport overlay.</li><li> User Authentication: Secure user signup, login gatekeeping, and active session state handling.</li><li>Responsive Design: Fluid structural breakpoints optimized for flawless navigation across mobile, tablet, and desktop viewports.</li></ul>} 
        stackF={<ul><li>React.js</li><li> React Router (Multi-page routing). 
</li><li>Styling: React+Bootstrap+CSS.</li></ul>} stackB={<ul><li>MirageJS (Mock API server for network simulation).</li></ul>}
learnings={<ul><li><strong>Mock API Integration: </strong>Advanced utilization of MirageJS to simulate a real-world backend server, handling asynchronous HTTP requests, database seeding, and RESTful route boundaries.</li>
<li><strong>Algorithmic Asset Generation:</strong> Engineered a workflow that automatically generates and assigns a high-quality random placeholder image to newly initialized albums to populate empty states creatively.</li>
<li><strong>Single Page Application (SPA) Architecture: </strong>Mastered declarative client-side routing using React Router to manage clean transitions across a multi-page environment.</li>
<li><strong>Clean Architecture: </strong>Kept components separate, organized state data clearly, and made code modular so the project stays readable and easy to update.</li></ul>}/>}]


return(
<>
     <h1 id="section-name">P R O J E C T S </h1>
   
<Container className="my-5">
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
</Container>
</>

)

}