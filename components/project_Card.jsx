import react, { Children } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Project_Card(props) {
	return (
		<>
			<div className="mockups">
				<Container>
					<Row className="justify-content-md-center">
						<Col md="auto">
							<img src={props.projectlogo} width={props.style} />
						</Col>
					</Row>
					<Row>
						<Col>
							<div>
								<h4>Problem</h4>
								<p>{props.problems}</p>

								<h4>Solution</h4>
								<p>{props.solutions}</p>
							</div>
						</Col>
					</Row>
					<Row className="justify-content-evenly">
						<Col>
							<img
								id={props.img_id}
								src={props.img_src}
								style={{ width: "200px" }}
							/>
						</Col>
						<Col className="d-flex justify-content-center align-items-center">
							<Button variant="dark" href={props.repo} target="_blank">
								<FontAwesomeIcon
									icon={faGithub}
									size="xl"
									style={{ color: "rgb(241, 243, 247)" }}
								/>
								Repository
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
