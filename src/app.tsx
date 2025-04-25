// File: src/App.tsx
import { createSignal, onMount, createEffect } from 'solid-js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = createSignal('about');
  let canvasRef: HTMLCanvasElement | undefined;
  
  onMount(() => {
    if (!canvasRef) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 10;
    controls.minDistance = 3;
    controls.enablePan = false;
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x4e00ff, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(0x00ffff, 1);
    pointLight2.position.set(-2, -3, 2);
    scene.add(pointLight2);
    
    // Enhanced particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000; // Increased particle count
    
    const positionArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    const sizeArray = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      positionArray[i] = (Math.random() - 0.5) * 20;
      positionArray[i + 1] = (Math.random() - 0.5) * 20;
      positionArray[i + 2] = (Math.random() - 0.5) * 20;
      
      // Color - gradient from blue to cyan
      const ratio = Math.random();
      colorArray[i] = 0.3 * ratio; // R
      colorArray[i + 1] = 0.0 + 0.8 * ratio; // G
      colorArray[i + 2] = 1.0; // B
      
      // Size
      sizeArray[i/3] = Math.random() * 0.05 + 0.02;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizeArray, 1));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Add nebula-like effect (large, diffuse particles in background)
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaCount = 200;
    
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);
    const nebulaSizes = new Float32Array(nebulaCount);
    
    for (let i = 0; i < nebulaCount * 3; i += 3) {
      // Position - further away
      nebulaPositions[i] = (Math.random() - 0.5) * 30;
      nebulaPositions[i + 1] = (Math.random() - 0.5) * 30;
      nebulaPositions[i + 2] = (Math.random() - 0.5) * 30 - 10; // Push further back
      
      // Color - softer blues and purples
      nebulaColors[i] = 0.2 + Math.random() * 0.2; // R
      nebulaColors[i + 1] = 0.0 + Math.random() * 0.2; // G
      nebulaColors[i + 2] = 0.5 + Math.random() * 0.5; // B
      
      // Larger size
      nebulaSizes[i/3] = Math.random() * 0.3 + 0.1;
    }
    
    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeometry.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));
    nebulaGeometry.setAttribute('size', new THREE.BufferAttribute(nebulaSizes, 1));
    
    const nebulaMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    });
    
    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particles
      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.0001;
      
      // Rotate nebula slightly differently
      nebula.rotation.y += 0.0001;
      nebula.rotation.z += 0.0002;
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  
  return (
    <div class="app">
      <canvas ref={canvasRef} class="webgl-canvas"></canvas>
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
          
          <div class={`section ${activeSection() === 'contact' ? 'active' : ''}`}>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;