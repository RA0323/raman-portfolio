import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p><FaEnvelope style={{ marginRight: '8px' }} /> ramankumarsharma039@gmail.com</p>
      <p><FaGithub style={{ marginRight: '8px' }} /> <a href="https://github.com/RA0323" target="_blank" rel="noopener noreferrer">github.com/RA0323</a></p>
    </section>
  );
}

export default Contact;
