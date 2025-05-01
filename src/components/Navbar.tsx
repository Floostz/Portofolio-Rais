import { Component } from 'solid-js';

interface NavbarProps {
  activeSection: () => string;
  setActiveSection: (section: string) => void;
}

const Navbar: Component<NavbarProps> = (props) => {
  return (
    <nav class="navbar">
      <div class="logo">
        <h1>Rais.Stack</h1>
      </div>

      <div class = "navtail">
       <ul class="nav-links">
        <li class={props.activeSection() === 'about' ? 'active' : ''} 
            onClick={() => props.setActiveSection('about')}>About me</li>
        <li class={props.activeSection() === 'skills' ? 'active' : ''} 
            onClick={() => props.setActiveSection('skills')}>Skills</li>
        <li class={props.activeSection() === 'projects' ? 'active' : ''} 
            onClick={() => props.setActiveSection('projects')}>Projects</li>
      </ul>

      </div>
     
      <div class="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11.5c0 .8-.4 1.5-1 1.5s-1-.7-1-1.5.4-1.5 1-1.5 1 .7 1 1.5zm6 0c0 .8-.4 1.5-1 1.5s-1-.7-1-1.5.4-1.5 1-1.5 1 .7 1 1.5z"/><path d="M18.57 6.11c1.56.55 2.43 1.34 2.43 1.34 1.45 2.3 2.14 4.85 1.9 7.55 0 0-1.05 1.8-3.9 1.9 0 0-.45-.6-.9-1.2 1.8-.5 2.55-1.6 2.55-1.6-.55.35-1.1.6-1.6.75-.7.35-1.35.55-2 .65-.6.1-1.25.2-1.9.15-.9 0-1.75-.15-2.5-.35-.45-.1-.95-.25-1.45-.45-.1-.05-.2-.1-.35-.15-.1-.05-.15-.1-.2-.1h-.15c-.15-.1-.25-.15-.25-.15s.75 1.05 2.45 1.55c-.4.5-.9 1.1-.9 1.1-2.85-.1-3.95-1.95-3.95-1.95-.24-2.7.44-5.25 1.9-7.55 0 0 .85-.8 2.45-1.35.15.05.2.15.05.25-1.1.35-1.65.85-1.65.85s.15-.1.35-.2c1.35-.6 2.45-.75 2.9-.8h.25c.7-.1 1.55-.1 2.4 0 1.1.15 2.3.5 3.5 1 0 0-.55-.5-1.75-.85-.05-.15 0-.2.15-.25zM13.5 12c.5 0 .9-.45.9-.95 0-.55-.4-1-.9-1-.45 0-.9.45-.9 1 0 .5.45.95.9.95zm-3 0c.5 0 .9-.45.9-.95 0-.55-.4-1-.9-1-.45 0-.9.45-.9 1 0 .5.45.95.9.95z"/></svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;