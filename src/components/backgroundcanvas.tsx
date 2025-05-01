import { Component, onMount } from 'solid-js';

// Import gambar sebagai modul
import tsIcon from '../assets/ts.png';
import reactIcon from '../assets/react.png';
import postgresIcon from '../assets/postger.png';
import nodeIcon from '../assets/node-js.png';
import htmlIcon from '../assets/html.png';
import rustIcon from '../assets/rust2.png';
import solidIcon from '../assets/Solid.js.png';
import blackholeWebm from '../assets/blackhole.webm';

const BackgroundCanvas: Component = () => {
  onMount(() => {
    setupBackground();
  });

  const setupBackground = () => {
    const techIcons = [
      { src: tsIcon, top: "20%", left: "85%", size: 80 },
      { src: reactIcon, top: "35%", left: "80%", size: 70 },
      { src: postgresIcon, top: "55%", left: "75%", size: 60 },
      { src: nodeIcon, top: "30%", left: "65%", size: 55 },
      { src: htmlIcon, top: "60%", left: "65%", size: 65 },
      { src: rustIcon, top: "70%", left: "75%", size: 70 },
      { src: solidIcon, top: "40%", left: "90%", size: 65 }
    ];
    
    const container = document.querySelector('.background-icons');
    if (!container) return;

    techIcons.forEach(icon => {
      const img = document.createElement('img');
      img.src = icon.src;
      img.alt = "Tech icon";
      img.style.position = "absolute";
      img.style.top = icon.top;
      img.style.left = icon.left;
      img.style.width = icon.size + "px";
      img.style.height = icon.size + "px";
      img.style.opacity = "0.5";
      container.appendChild(img);
    });

    const starContainer = document.querySelector('.stars-container');
    if (!starContainer) return;

    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      star.style.animationDelay = `${Math.random() * 5}s`;
      starContainer.appendChild(star);
    }
  };

  return (
    <div class="webgl-background">
      <div class="stars-container"></div>
      <div class="black-hole-container">
      <video class="black-hole-video" autoplay loop muted playsinline>
  <source src={blackholeWebm} type="video/webm" />

  Your browser does not support the video tag.
</video>

      </div>
      <div class="cosmic-effect"></div>
      <div class="background-icons"></div>
    </div>
  );
};

export default BackgroundCanvas;
