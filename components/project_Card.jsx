import react, { Children } from "react"
import { Button } from "react-bootstrap"

export function Project_Card(props){
    return(
        <>
        <div className="project-cont">
         <div className="mockups">
              <img width="300px" src={props.projectlogo} />
              <h4>Problem</h4>
                <p>{props.problems}</p>
             
              <h4>Solution</h4>
              <p>{props.solutions}</p>
              <img id={props.img_id} src={props.img_src} style={{ width: '200px' }} />
             
          </div>

         
        <div className="video">
             <h1> Watch preview </h1>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <video
              src={props.videosrc}
              width="90%"
              height="auto"
              controls
              autoPlay
              muted
             type="video/quicktime"
            >
              Your browser does not support the video tag.
            </video>
            <div className="more">
              <Button variant="secondary" href={props.repo} target="_blank">Repository</Button>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}