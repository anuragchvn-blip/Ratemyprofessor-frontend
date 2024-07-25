import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footerStyle = {
    backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    backgroundColor: 'black',
    color: 'white',
    minHeight: 'auto',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
    width: '100vw',
    height: 'auto',
};

const socialIconStyle = {
  color: '#fff',
  marginRight: '10px',
  fontSize: '18px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>Learn More</Link>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
              <li><Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link></li>
              <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>123 Main Street, Anytown, USA</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <div style={{ marginTop: '20px' }}>
              <a href="#" style={socialIconStyle}><FaFacebookF /></a>
              <a href="#" style={socialIconStyle}><FaTwitter /></a>
              <a href="#" style={socialIconStyle}><FaInstagram /></a>
              <a href="#" style={socialIconStyle}><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
