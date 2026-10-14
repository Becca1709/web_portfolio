import react, { Children } from "react"
import { Button, Container, Col, Row } from "react-bootstrap"

export function Project_Card(props){
    return(
        <>
        
         <div className="mockups">
             <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                             <img src={props.projectlogo} width={props.style}/>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <div className="bottom">
                             <h4>Problem</h4>
                <p>{props.problems}</p>
             
              <h4>Solution</h4>
              <p>{props.solutions}</p>
                        </div>
                        </Col>
                    </Row>     
                     <Row className="justify-content-evenly" >
                            <Col>
                                       <img id={props.img_id} src={props.img_src} style={{ width: '200px' }} />
                                        </Col>
                                        <Col>
             <Button variant="secondary" href={props.repo} target="_blank">Repository</Button>
             </Col>
                            </Row>    
             
          </Container>

        </div>
        </>
    )
}