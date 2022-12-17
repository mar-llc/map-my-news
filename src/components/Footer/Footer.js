import React from 'react';

// reactstrap components
import { Button, NavItem, NavLink, Nav, Container, Row, Col, UncontrolledTooltip } from 'reactstrap';

export default function Footer() {
  const scrollToaboutUs = () => {
    document.getElementById('aboutUs-section').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollTohome = () => {
    document.getElementById('home-section').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollTomap = () => {
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">
              Map my <br />
              News
            </h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink style={{ cursor: 'pointer' }} onClick={scrollTohome}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ cursor: 'pointer' }} onClick={scrollTomap}>
                  Map
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ cursor: 'pointer' }} onClick={scrollToaboutUs}>
                  About Project
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="#"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="#"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="#"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-dribbble" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
