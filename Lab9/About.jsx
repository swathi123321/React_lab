import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2>About Page</h2>
      <p>
        We are a team of developers and designers who build clean, responsive web pages that are
        easy to use.
      </p>

      <section>
        <h3>Our Mission</h3>
        <p>
          To make the web more accessible and helpful by creating simple, polished pages with
          clear content.
        </p>
      </section>

      <section>
        <h3>Our Approach</h3>
        <ul>
          <li>Design with clarity</li>
          <li>Build for all devices</li>
          <li>Keep content easy to read</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
