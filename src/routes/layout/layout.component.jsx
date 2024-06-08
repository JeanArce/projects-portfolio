import { Fragment } from "react";


import { Navbar, Nav, Container, Button, Col, ListGroup, Row, Card } from "react-bootstrap";
import ScrollSpy from "react-ui-scrollspy";
import profile from '../../assets/images/myprofile.jpeg';
import holidaze from '../../assets/images/holidaze.jpg';
import apparelOnline from '../../assets/images/apparel-online.jpg';
import auction from '../../assets/images/auction.jpg';

const Layout = () => {

   
    const navigateLink = (link) => {
        window.location.href = link;
    };

    return (
      <Fragment>
        <Navbar id="mainNavBar" bg="primary" variant="dark" fixed="top">
          <Container>
            <Nav className="me-auto">
              <Nav.Link data-to-scrollspy-id="about" href="#home">
                About
              </Nav.Link>
              <Nav.Link data-to-scrollspy-id="portfolio" href="#portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link data-to-scrollspy-id="contact" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <ScrollSpy scrollThrottle={600}>
          <div id="home">
            <Container className="text-center bg-info" fluid>
              <h1 className="display-2">Portfolio</h1>
              <p className="lead">
                My name is Jean Arcenal and I am a Front End Developer student
                at Noroff Fagskole.
              </p>
              <img className="profileImage" src={profile} alt="Profile" />
              <Button variant="primary" size="lg" href="#contact">
                Contact Me
              </Button>
            </Container>
          </div>

          <div id="about">
            <Container className="defaultSpacing">
              <Row>
                <Col lg={4}>
                  <h3 className="mb-2">About Jean</h3>

                  <p>
                    I'm a passionate front-end development student with a deep
                    love for creating engaging and user-friendly websites. A
                    competent, analytical, flexible, and eager to perform
                    individual. I sees myself working with an IT company or
                    any other companies embracing technological means.
                  </p>
                  <p>
                    Likewise, I'm also aims to contribute to the possible
                    organization's growth and development given my skills and
                    competencies.
                  </p>
                </Col>

                <Col lg={4}>
                  <h3 className="mb-2">Location</h3>
                  <p>Hello there!</p>
                  <p>
                    Im Jean from Oslo, Norway. A Web Developer student at Noroff.
                    If you are interested, leave a message by
                    clicking the contact me button at the top or contact link in
                    the navigation.
                  </p>
                </Col>

                <Col lg={4}>
                  <h3 className="mb-2">Skills</h3>
                  <ListGroup>
                    <ListGroup.Item>
                      <strong>JavaScript</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>React</strong>: JavaScript framework
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>HTML</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>CSS</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Bootstrap</strong>: Front-end development
                      framework
                    </ListGroup.Item>
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
              <h1 className="text-center display-4 mb-5 text-muted">
                Work Samples
              </h1>

              <Row id="portfolioRow" className="justify-content-center">
                <Col lg={4}>
                  <Card
                    onClick={() =>
                      navigateLink("https://apparel-online.netlify.app")
                    }
                  >
                    <Card.Img
                      variant="top"
                      src={apparelOnline}
                      alt="Apparel Online"
                    />
                    <Card.Body>
                      <Card.Title>Apparel Online</Card.Title>
                      <Card.Text>E-commerce</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card
                    onClick={() =>
                      navigateLink(
                        "https://jeanarce.github.io/semester-project-two-auctions"
                      )
                    }
                  >
                    <Card.Img variant="top" src={auction} alt="Auction Site" />
                    <Card.Body>
                      <Card.Title>Auction Site</Card.Title>
                      <Card.Text>
                        A platform for buying and selling goods through
                        competetive bidding
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card
                    onClick={() =>
                      navigateLink("https://holidaze-booking101.netlify.app")
                    }
                  >
                    <Card.Img variant="top" src={holidaze} alt="Holidaze" />
                    <Card.Body>
                      <Card.Title>Holidaze</Card.Title>
                      <Card.Text>Online booking for a holidays</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>

          <div id="contact">
            <Container className="defaultSpacing">
              <h1 className="text-center display-4 mb-5 text-muted">
                Contact Me
              </h1>
              <Row>
                <Col md={12}>
                  <p className="text-center">
                    Feel free to leave me a message in my email{" "}
                    <strong>jnrcnal616@gmail.com</strong>
                  </p>
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
                  <small>&copy; 2024. All Rights Reserved</small>
                </Col>
              </Row>
            </Container>
          </div>
        </ScrollSpy>
      </Fragment>
    );
};

export default Layout;