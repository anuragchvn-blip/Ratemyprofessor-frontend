import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const aboutUsStyle = {
  backgroundColor: '#111',
  color: 'white',
  padding: '50px 0',
  minHeight: '100vh',
};

const aiRobotStyle = {
  width: '100%',
  maxWidth: '300px',
  margin: '0 auto',
};

const AboutUs = () => {
  return (
    <div style={aboutUsStyle}>
      <Container>
        <Row className="text-center">
          <Col md={12} className="mb-4">
            
            <h1 className="display-4 mt-4">About Us</h1>
          </Col>
          <Col md={8} className="mx-auto">
            <p className="lead">
              Welcome to Rate My Professor, where we strive to bring transparency and valuable insights to the academic community. Our platform allows students to share their experiences and reviews about professors to help others make informed decisions. Our team is dedicated to providing a high-quality, user-friendly experience that enhances educational outcomes for all.
            </p>
            <p>
              Our mission is to leverage technology and community feedback to improve the educational landscape. We believe in the power of shared knowledge and are committed to creating a space where students and educators can connect and grow.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
