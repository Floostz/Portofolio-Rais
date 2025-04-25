import { Component } from 'solid-js';


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />

const Skills: Component = () => {
  return (
    <div class="skills-container">
      <h2>My Skills</h2>
      
      <div class="skill-category">
        <h3>Frontend Development</h3>
        <div class="skill-items">
          <div class="skill-item"><i class="fa-brands fa-html5"></i> HTML</div>
          <div class="skill-item"><i class="fa-brands fa-css3-alt"></i> CSS</div>
          <div class="skill-item"><i class="fa-brands fa-js"></i> JavaScript</div>
          <div class="skill-item"><i class="fa-brands fa-react"></i> ReactJS</div>
          <div class="skill-item"><i class="fa-brands fa-solid fa-code"></i> SolidJS</div>
          <div class="skill-item"><i class="fa-brands fa-react"></i> React-Native</div>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>Backend Development</h3>
        <div class="skill-items">
          <div class="skill-item"><i class="fa-solid fa-gears"></i> Rust-C</div>
          <div class="skill-item"><i class="fa-brands fa-node-js"></i> Express-JS</div>
          <div class="skill-item"><i class="fa-solid fa-database"></i> SQL</div>
          <div class="skill-item"><i class="fa-brands fa-node"></i> Node.js</div>
          <div class="skill-item"><i class="fa-brands fa-python"></i> Python</div>
          <div class="skill-item"><i class="fa-solid fa-code"></i> C#</div>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>Design & Media</h3>
        <div class="skill-items">
          <div class="skill-item"><i class="fa-brands fa-figma"></i> Figma</div>
          <div class="skill-item"><i class="fa-solid fa-cube"></i> Unity</div>
          <div class="skill-item"><i class="fa-solid fa-cube"></i> Blender</div>
          <div class="skill-item"><i class="fa-solid fa-video"></i> Davinci Resolve</div>
          <div class="skill-item"><i class="fa-solid fa-film"></i> After Effect</div>
          <div class="skill-item"><i class="fa-solid fa-scissors"></i> Capcut</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;