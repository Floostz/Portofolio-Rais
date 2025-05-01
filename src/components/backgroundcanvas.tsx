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

    // Create different types of stars with varied animations
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      
      // Random size (smaller range for more realistic stars)
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 8}s`;
      
      // Random animation duration for twinkling
      star.style.animationDuration = `${Math.random() * 5 + 3}s`;
      
      // Add different animation types
      const animationType = Math.floor(Math.random() * 3);
      if (animationType === 0) {
        star.classList.add('twinkle');
      } else if (animationType === 1) {
        star.classList.add('pulse');
      } else {
        star.classList.add('drift');
        
        // Add random drift direction
        const driftX = (Math.random() - 0.5) * 20;
        const driftY = (Math.random() - 0.5) * 20;
        star.style.setProperty('--drift-x', `${driftX}px`);
        star.style.setProperty('--drift-y', `${driftY}px`);
      }
      
      starContainer.appendChild(star);
    }
    
    // Add some shooting stars
    for (let i = 0; i < 5; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      
      // Position shooting stars
      shootingStar.style.top = `${Math.random() * 60}%`;
      shootingStar.style.left = `${Math.random() * 100}%`;
      
      // Random animation delay and duration
      shootingStar.style.animationDelay = `${Math.random() * 15}s`;
      shootingStar.style.animationDuration = `${Math.random() * 3 + 2}s`;
      
      starContainer.appendChild(shootingStar);
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
      
      <style>
      {`
        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        
        .star {
          position: absolute;
          background-color: #ffffff;
          border-radius: 50%;
          z-index: 1;
        }
        
        .twinkle {
          animation: twinkle linear infinite;
        }
        
        .pulse {
          animation: pulse linear infinite;
        }
        
        .drift {
          animation: drift linear infinite;
        }
        
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: #ffffff;
          transform: rotate(-45deg);
          z-index: 2;
          opacity: 0;
          animation: shoot linear infinite;
        }
        
        .shooting-star::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
          transform-origin: left center;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.9; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        
        @keyframes drift {
          0% { 
            transform: translate(0, 0); 
            opacity: 0.6;
          }
          25% {
            opacity: 1;
          }
          50% {
            transform: translate(var(--drift-x, 10px), var(--drift-y, 10px));
            opacity: 0.8;
          }
          75% {
            opacity: 0.4;
          }
          100% { 
            transform: translate(0, 0);
            opacity: 0.6;
          }
        }
        
        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          20% {
            transform: translateX(-100px) translateY(100px) rotate(-45deg);
            opacity: 0;
          }
          100% {
            transform: translateX(-100px) translateY(100px) rotate(-45deg);
            opacity: 0;
          }
        }
      `}
      </style>
    </div>
  );
};

export default BackgroundCanvas;