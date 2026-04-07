import React from 'react';
import sampleimage from "./assets/image.jpg";

function Home() {
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2>Home Page</h2>
      <img
        src={sampleimage}
        alt="Sample" style={{alignItems:'center'}}
        />
      <p>
        Welcome to our site. We share helpful information about our team, services, and how to
        contact us.
      </p>

      <section>
        <h3>What You Will Find</h3>
        <ul>
          <li>Background on who we are</li>
          <li>Examples of our values and mission</li>
          <li>Contact details for questions and support</li>
        </ul>
      </section>

      <section>
        <h3>Why Visit</h3>
        <p>
          This site is designed to be simple and informative. Use the navigation links to explore
          each page and learn more about our work.
        </p>
      </section>
    </div>
  );
}

export default Home;
