import react, { Children } from "react"
import { Button } from "react-bootstrap"

export function Video_Card(props){
    return(
        <>
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
          </div>
        </div></>
    )}