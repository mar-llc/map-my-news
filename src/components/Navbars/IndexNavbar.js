import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState('');
  const [color, setColor] = React.useState('navbar-transparent');
  React.useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return function cleanup() {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);
  const changeColor = () => {
    if (document.documentElement.scrollTop > 99 || document.body.scrollTop > 99) {
      setColor('bg-info');
    } else if (document.documentElement.scrollTop < 100 || document.body.scrollTop < 100) {
      setColor('navbar-transparent');
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle('nav-open');
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut('collapsing-out');
  };
  const onCollapseExited = () => {
    setCollapseOut('');
  };
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
    <Navbar className={`fixed-top ${color}`} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <button
              type="button"
              style={{
                backgroundColor: 'transparent',
                backgroundRepeat: ' no-repeat',
                border: 'none',
                cursor: 'pointer',
                overflow: 'hidden',
                outline: 'none',
                color: 'white',
              }}
              onClick={scrollTohome}
            >
              <img src="/apple-icon.png" alt="icon" height={50} width={50} />
            </button>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Mar LLC
          </UncontrolledTooltip>
          <button
            type="button"
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={`justify-content-end ${collapseOut}`}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-close text-right" xs="6">
                <button type="button" aria-expanded={collapseOpen} className="navbar-toggler" onClick={toggleCollapse}>
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <Button className="nav-link d-none d-lg-block" color="default" onClick={scrollTohome}>
                <HomeIcon sx={{ fill: '#1890ff' }} /> Home
              </Button>
            </NavItem>
            <NavItem>
              <Button className="nav-link d-none d-lg-block" color="default" onClick={scrollTomap}>
                <MapIcon sx={{ fill: '#1890ff' }} /> Map
              </Button>
            </NavItem>
            <NavItem>
              <Button className="nav-link d-none d-lg-block" color="default" onClick={scrollToaboutUs}>
                <InfoIcon sx={{ fill: '#1890ff' }} /> About Project
              </Button>
            </NavItem>
            <NavItem />
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
