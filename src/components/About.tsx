import { Component } from 'solid-js';

const About: Component = () => {
  return (
    <div class="about-container">
      <div class="hero-content">
        <div class="badge">Portofolio Fullstack Developer</div>
        <h1 class="hero-title">
          <span class="line-1">Menyediakan</span>
          <span class="gradient-text line-2">pengalaman terbaik</span>
          <span class="line-3">dalam pengerjaan proyek</span>
        </h1>
        <p class="hero-description">
          Saya adalah Junior Software Engineer Full Stack dengan pengalaman dalam
          pengembangan Website, Aplikasi Mobile, dan Software. Lihat proyek dan keterampilan saya.
        </p>
        <button class="cta-button">Lihat Lebih Lanjut</button>
      </div>
    </div>
  );
};

export default About;
