import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Sadwin Brunas</h2>
        <div className="prompt">
          <p>A Software developer with passion and learning</p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>HTML, CSS, Bootstrap, Javascript, React JS</span>
          </li>
        </ol>
        <ol className="list">
          <li className="item">
            <h2>Basic Knowledge</h2>
            <span>Bootstrap, Node.js, Material UI, Github</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default  Home;