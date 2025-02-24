import React from 'react';
import "./App.css";
const Home = () => {
   
    return (
      <div>
          <h3>Demo Idea for Growth Week - 2025</h3>
          <h4>Background</h4>
          <p>Capturing information we use each day - like a <i>personal Wiki</i>.
            <ul>
              <li>Company or External web pages</li>
              <li>Slack channel conversations</li>
              <li>Company document links</li>
              <li>Personal notes, screenshots etc</li>
            </ul> 
          </p>

          <h4>Current demo</h4>
           <ul>
            <li>Simple React application - code as a learning aid.</li>
            <li>Personal assistant for recording links and grouping these.</li>
          </ul>

          <h4>Extended goals</h4>
          <ul>
          <li>Record notes/snippets.</li>
          <li>Create an image carousel from screen shots, adding notes to these.</li>
          </ul>
        </div>
    );
};

export default Home;
