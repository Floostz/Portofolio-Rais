import { createSignal, onMount } from 'solid-js';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BackgroundCanvas from './components/backgroundcanvas';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = createSignal('about');
  
  return (
    <div class="app">
      <BackgroundCanvas />
      <div class="content-overlay">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <div class="sections">
          <div class={`section ${activeSection() === 'about' ? 'active' : ''}`}>
            <About />
          </div>
          
          <div class={`section ${activeSection() === 'skills' ? 'active' : ''}`}>
            <Skills />
          </div>
          
          <div class={`section ${activeSection() === 'projects' ? 'active' : ''}`}>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;