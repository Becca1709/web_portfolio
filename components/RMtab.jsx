import { Button, Container, Col, Row } from "react-bootstrap"
import react, { Children } from "react"

export default function Readmd(props){
    return(
        <>
        <div className="mockups">
            <h1>{props.name}</h1>
            {props.description}
            <h3>Preview</h3>
            <a href={props.preview_web}>Check Sandbox Preview</a>
            <h3>Functional Prototype</h3>
            <p>{props.proto}</p>
            <h3>Features</h3>
            <p>{props.features}</p>
            <h3>Tech Stack</h3>
            <p>{props.stack}</p>
            <h3>Key learning outcomes</h3>
            <p>{props.learnings}</p>
        </div>
        </>
    )
}