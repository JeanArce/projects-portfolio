import { Fragment } from "react";

import { Navbar, Nav, Container, Button, Col, ListGroup, Row, Card } from "react-bootstrap";
import ScrollSpy from "react-ui-scrollspy";
import profile from '../../assets/images/myprofile.jpeg';

const Layout = () => {
    return (
       <Fragment>

            <Navbar id="mainNavBar" bg="primary" variant="dark" fixed="top">
                <Container>
                    <Nav className="me-auto">
                       
                        <Nav.Link data-to-scrollspy-id="about" href="#home">About</Nav.Link>
                        <Nav.Link data-to-scrollspy-id="portfolio" href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link data-to-scrollspy-id="contact" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <ScrollSpy scrollThrottle={600}>

               <div id="home">
                    <Container className="text-center bg-info" fluid >
                        <h1  className="display-2">Portfolio</h1>
                        <p className="lead">
                            The name is Jean Arcenal and I am a Freelance Front End Developer.
                        </p>
                        <img className="profileImage" src={profile} alt="Profile" />
                        <Button  variant="primary" size="lg" href="#contact">
                            Contact Me
                        </Button>
                    </Container>
                </div>

                <div id="about">
                    <Container className="defaultSpacing">
                        <Row>
                            <Col lg={4}>
                                <h3 className="mb-2">About Jean</h3>
                            
                                <p>He is a competent, analytical, flexible, and eager to perform individual. He sees himself working with an IT company or any other companies embracing technological means.</p>        
                                <p>Likewise, he also aims to contribute to the possible organization's growth and development given his skills and competencies.</p>  
                            </Col>

                            <Col lg={4}>
                                <h3 className="mb-2">Location</h3>
                                <p>Hello there! I'm Jean Larroza Arcenal, I am originally from the Philippines and live here in Norway for 15 years, a passionate front-end development student with a deep love for creating engaging and user-friendly websites.</p>
                                <p>If you are interested with Jean, leave him a message by clicking the contact me button at the top or contact link in the navigation.</p>
                            </Col>

                            <Col lg={4}>
                                <h3 className="mb-2">Skills</h3>
                                <ListGroup>
                                 
                                    <ListGroup.Item><strong>JavaScript</strong></ListGroup.Item>
                                    <ListGroup.Item><strong>React</strong>: JavaScript framework</ListGroup.Item>
                                    <ListGroup.Item><strong>HTML</strong></ListGroup.Item>
                                    <ListGroup.Item><strong>CSS</strong></ListGroup.Item>
                                    <ListGroup.Item><strong>Bootstrap</strong>: Front-end development framework</ListGroup.Item>
                                 
                                </ListGroup>
                            </Col>

                            <Col md={12} className="mt-5">
                                <hr />
                            </Col>

                        </Row>
                    
                    </Container>
                </div>

             
                
                <div id="portfolio">
                    <Container className="defaultSpacing">
                        <h1 className="text-center display-4 mb-5 text-muted">Work Samples</h1>

                        <Row id="portfolioRow" className="justify-content-center">
                    
                            <Col lg={4}>
                                <Card>
                                    <Card.Img variant="top" src="https://res.cloudinary.com/panoy05/image/upload/v1462267454/tributePage_sa0b1c.png" alt="Bon Jovi Tribute Page" />
                                    <Card.Body>
                                    <Card.Title>Tribute Page</Card.Title>
                                    <Card.Text>Tribute Page for my idol Jon Bon Jovi</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card>
                                    <Card.Img variant="top" src="https://res.cloudinary.com/panoy05/image/upload/v1465021702/quoteGenerator_pg2hlm.png" alt="Random Quote Generator" />
                                    <Card.Body>
                                    <Card.Title>Random Quote Generator</Card.Title>
                                    <Card.Text>Generate Quotes then you can tweet a quote on Twitter</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <div id="contact">
                    <Container className="defaultSpacing">
                        <h1  className="text-center display-4 mb-5 text-muted">Contact Me</h1>
                        <Row>
                            <Col md={12}>
                                <p className="text-center">Feel free to leave me a message in my email <strong>jarcenal@gmail.com</strong></p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div>
                    <Container>
                        <Row className="py-2 mb-5">
                            <Col md={12}>
                                <hr />
                            </Col>
                            <Col md={7} className="text-muted">
                                <small>Powered by Jean Arcenal</small>
                            </Col>
                            <Col md={5} className="text-md-end text-muted">
                                <small>&copy; 2023. All Rights Reserved</small>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </ScrollSpy>

       </Fragment>
    )
};

export default Layout;