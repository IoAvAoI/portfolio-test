// Contact.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Contact() {
  return (
    <Container >
      <h2>Contact Me</h2>
      <Card>
        <Card.Body >
          <p>If you'd like to get in touch, you can reach me at:</p>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          <p>Twitter: <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter Profile</a></p>
          {/* Add more contact information as needed */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;

