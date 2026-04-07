import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2>Contact Page</h2>
      <p>If you have a question, feel free to reach out.</p>

      <section>
        <h3>Contact Details</h3>
        <ul>
          <li>Email: contact@example.com</li>
          <li>Phone: 769-832-4954</li>
        </ul>
      </section>

      <section>
        <h3>Office Hours</h3>
        <p>Monday to Friday, 9:00 AM to 6:00 PM</p>
      </section>
    </div>
  );
}

export default Contact;
