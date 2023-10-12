// Projects.js
import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

function Projects() {
  return (
    <Container>
      <h2>Projects</h2>
      <Button variant="primary">View All Projects</Button>
      <Form>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Projects;
