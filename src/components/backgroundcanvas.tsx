import { Component, onMount } from 'solid-js';

const BackgroundCanvas: Component = () => {
  onMount(() => {
    setupBackground();
  });

  const setupBackground = () => {
    const techIcons = [
      { src: "/assets/ts.png", top: "20%", left: "85%", size: 80 },
      { src: "/assets/react.png", top: "35%", left: "80%", size: 70 },
      { src: "/assets/postger.png", top: "55%", left: "75%", size: 60 },
      { src: "/assets/node-js.png", top: "30%", left: "65%", size: 55 },
      { src: "/assets/html.png", top: "60%", left: "65%", size: 65 },
      { src: "/assets/rust2.png", top: "70%", left: "75%", size: 70 },
      { src: "/assets/Solid.js.png", top: "40%", left: "90%", size: 65 }
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
          <source src="/assets/blackhole.webm" type="video/webm" />
          <source src="/assets/blackhole.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="cosmic-effect"></div>
      <div class="background-icons"></div>
    </div>
  );
};

export default BackgroundCanvas;
