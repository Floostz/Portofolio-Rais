import { Component } from 'solid-js';

interface NavbarProps {
  activeSection: () => string;
  setActiveSection: (section: string) => void;
}

const Navbar: Component<NavbarProps> = (props) => {
  return (
    <nav class="navbar">
      <div class="logo">
        <h1>Muhammad Faawwaz Aziz Nur Rais</h1>
      </div>
      <ul class="nav-links">
        <li class={props.activeSection() === 'about' ? 'active' : ''} onClick={() => props.setActiveSection('about')}>About</li>
        <li class={props.activeSection() === 'skills' ? 'active' : ''} onClick={() => props.setActiveSection('skills')}>Skills</li>
        <li class={props.activeSection() === 'projects' ? 'active' : ''} onClick={() => props.setActiveSection('projects')}>Projects</li>
   
      </ul>
    </nav>
  );
};

export default Navbar;