import { Component, createSignal } from 'solid-js';


import xirentVideo from '../assets/xirentp.mp4';
import gambarUrai from '../assets/calcu.png';
import gambarLaundry from '../assets/mockup.png';
import gambarCalcu from '../assets/calcu.png';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  vercel?: string;
  video?: string;
}

const Projects: Component = () => {
  const [projects] = createSignal<Project[]>([
    {
      id: 1,
      title: "XIIRENT (Applikasi Booking Warnet)",
      description: "Aplikasi mobile untuk pemesanan tempat di warnet secara real-time, dilengkapi fitur pemilihan kursi, jadwal, dan sistem notifikasi.",
      tech: ["React-native", "Rust", "After Effect", "Blender"],
      video: xirentVideo, // Langsung dari import
      github: "https://github.com/yourusername/xiirent",
    },
    {
      id: 2,
      title: "URAI",
      description: "Platform digital untuk mengelola sampah secara terorganisir dan meningkatkan kesadaran lingkungan.",
      tech: ["Solid-js", "CSS", "Firebase", "After Effect"],
      image: gambarUrai,
      github: "https://github.com/yourusername/urai",
      vercel: "https://uraiix.vercel.app",
    },
    {
      id: 3,
      title: "Laundry Management-APP",
      description: "Aplikasi untuk membantu pengelolaan pelanggan laundry dengan nota digital dan print Bluetooth.",
      tech: ["React Native", "Firebase"],
      image: gambarLaundry,
      github: "https://github.com/Floostz/SalamoenLaundryAPP",
    },
    {
      id: 4,
      title: "Rais.Calcu",
      description: "Kalkulator lengkap menggunakan Solid.js dan Firebase.",
      tech: ["Solid-js", "CSS", "Firebase"],
      image: gambarCalcu,
      github: "https://github.com/Floostz/fawazcalcu",
      vercel: "https://fawazcalcu-ujak.vercel.app/",
    }
  ]);

  return (
    <div class="projects-container">
      <h2>Projects</h2>
      <div class="projects-grid">
        {projects().map(project => (
          <div class="project-card">
            <div class="project-image">
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  autoplay
                  muted
                  loop
                  class="project-video"
                ></video>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  class="project-img"
                />
              )}
              <div class="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="icon-circle github"
                  >
                    {/* GitHub Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
                {project.vercel && (
                  <a
                    href={project.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="icon-circle vercel"
                  >
                    {/* Vercel Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 19.8h20L12 2z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <div class="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div class="project-tech">
                {project.tech.map(tech => (
                  <span class="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
