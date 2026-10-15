import { Button, Container, Col, Row } from "react-bootstrap"
import react, { Children } from "react"

export function Readmd(props){
 
    return(
        <>
        <div className="readmecss">
            <h1>{props.name}</h1>
            <hr></hr>
            <p>{props.description}</p>
          {props.preview_web && <div>
            <h3>Preview</h3>
            <a href={props.preview_web} target="_blank"> Check the Live preview in the sandbok here</a></div>}
            <hr></hr>
            <h3>Project Status</h3>
            <p>{props.proto}</p>
            <hr></hr>
            <h3>Features</h3>
            <p>{props.features}</p>
            <hr></hr>
            <h3>Tech Stack</h3>
            <h5>Front-End</h5>
            <p>{props.stackF}</p>
             <h5>Back-End</h5>
             <p>{props.stackB}</p>
             <hr></hr>
            <h3>Key learning outcomes</h3>
            <p>{props.learnings}</p>
        </div>
        </>
    )
}