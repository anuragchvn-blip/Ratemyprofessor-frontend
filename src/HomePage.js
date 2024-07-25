import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { motion } from 'framer-motion';
import '@fontsource/roboto';
import '@fontsource/montserrat';
import { useOutsideClick } from './useOutsideClick'; // Adjust path if needed
import Footer from './Footer'; // Adjust path as needed

const gridBackgroundStyle = {
  backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
  backgroundSize: '20px 20px',
  backgroundColor: 'black',
  color: 'white',
  minHeight: '100vh',
  padding: '20px',
  position: 'relative',
  overflow: 'hidden',
  width: '100vw',
  height: 'auto',
};

const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const featureVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const featureRef = useRef(null);

  useOutsideClick(featureRef, () => {
    setActiveFeature(null); // Hide feature details when clicking outside
  });

  const handleFeatureClick = (feature) => {
    setActiveFeature(feature); // Show feature details
  };

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Roboto', sans-serif;
          }
          .hero-section h1 {
            font-family: 'Montserrat', sans-serif;
          }
          .feature {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #ffffff;
            overflow: hidden;
          }
          .feature img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        `}
      </style>
      <div style={gridBackgroundStyle} className="full-width">
        <Container fluid className="p-0">
          <motion.div
            className="hero-section text-center text-white py-5"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            style={{ color: '#ffffff' }}
          >
            <h1 style={{ fontSize: '3rem' }}>Welcome to Rate My Professor</h1>
            <p style={{ fontSize: '1.25rem' }}>
              Discover and review professors at your university. Share your experiences and help others make informed decisions.
            </p>
            <Button color="primary" onClick={() => setShowForm(true)} style={{ fontSize: '1rem' }}>
              Get Started
            </Button>
          </motion.div>

          <motion.div
            className="features-section py-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ color: '#ffffff' }}
          >
            <Row>
              <Col md={4}>
                <motion.div
                  className="feature"
                  ref={featureRef}
                  variants={featureVariants}
                  style={{ padding: '20px', cursor: 'pointer' }}
                  onClick={() => handleFeatureClick(1)}
                >
                  <img src="https://via.placeholder.com/600x400?text=Feature+1" alt="Feature 1" />
                  <div style={{ padding: '15px' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>Feature 1</h3>
                    <p style={{ fontSize: '1rem' }}>Discover detailed professor ratings and reviews.</p>
                    {activeFeature === 1 && (
                      <div className="feature-details" style={{ marginTop: '20px' }}>
                        <p>Details about Feature 1...</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  className="feature"
                  ref={featureRef}
                  variants={featureVariants}
                  style={{ padding: '20px', cursor: 'pointer' }}
                  onClick={() => handleFeatureClick(2)}
                >
                  <img src="https://via.placeholder.com/600x400?text=Feature+2" alt="Feature 2" />
                  <div style={{ padding: '15px' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>Feature 2</h3>
                    <p style={{ fontSize: '1rem' }}>Share your own reviews and rate professors you have experienced.</p>
                    {activeFeature === 2 && (
                      <div className="feature-details" style={{ marginTop: '20px' }}>
                        <p>Details about Feature 2...</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  className="feature"
                  ref={featureRef}
                  variants={featureVariants}
                  style={{ padding: '20px', cursor: 'pointer' }}
                  onClick={() => handleFeatureClick(3)}
                >
                  <img src="https://via.placeholder.com/600x400?text=Feature+3" alt="Feature 3" />
                  <div style={{ padding: '15px' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>Feature 3</h3>
                    <p style={{ fontSize: '1rem' }}>Browse reviews to find the best professors and avoid the worst ones.</p>
                    {activeFeature === 3 && (
                      <div className="feature-details" style={{ marginTop: '20px' }}>
                        <p>Details about Feature 3...</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>

          {showForm && (
            <motion.div
              className="review-form-section py-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ color: '#ffffff' }}
            >
              <h2 className="text-center mb-4" style={{ fontSize: '2rem' }}>Submit Your Review</h2>
              <Form className="mx-auto" style={{ maxWidth: '600px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
                <FormGroup>
                  <Label for="professor" style={{ color: '#ffffff' }}>Professor</Label>
                  <Input type="text" id="professor" placeholder="Enter professor's name" style={{ backgroundColor: '#444', color: '#ffffff' }} />
                </FormGroup>
                <FormGroup>
                  <Label for="department" style={{ color: '#ffffff' }}>Department</Label>
                  <Input type="text" id="department" placeholder="Enter department" style={{ backgroundColor: '#444', color: '#ffffff' }} />
                </FormGroup>
                <FormGroup>
                  <Label for="rating" style={{ color: '#ffffff' }}>Rating</Label>
                  <Input type="number" id="rating" min="1" max="5" style={{ backgroundColor: '#444', color: '#ffffff' }} />
                </FormGroup>
                <FormGroup>
                  <Label for="review" style={{ color: '#ffffff' }}>Review</Label>
                  <Input type="textarea" id="review" placeholder="Share your thoughts about this professor" rows="4" style={{ backgroundColor: '#444', color: '#ffffff' }} />
                </FormGroup>
                <Button type="submit" color="primary" block style={{ fontSize: '1rem' }}>Submit Review</Button>
              </Form>
            </motion.div>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
