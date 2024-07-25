import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ContactPage = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" id="name" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" id="email" placeholder="Your Email" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" id="message" placeholder="Your Message" />
            </FormGroup>
            <Button color="primary">Send</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
