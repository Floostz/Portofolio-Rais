import { Component, createSignal } from 'solid-js';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string; // Optional GitHub repository URL
  vercel?: string; // Optional Vercel deployment URL
  video?: string; // Optional
}

const Projects: Component = () => {
  const [projects] = createSignal<Project[]>([
    {
      id: 1,
      title: "XIIRENT ( Applikasi Booking Warnet)",
      description: "Aplikasi mobile untuk pemesanan tempat di warnet secara real-time, dilengkapi fitur pemilihan kursi, jadwal, dan sistem notifikasi. Dirancang untuk memberikan pengalaman pengguna yang cepat, modern, dan efisien.",
      tech: ["React-native", "Rust", "After Effect", "Blender"],
      image: "ecommerce",
      github: "https://github.com/yourusername/xiirent",

    },
    {
      id: 2,
      title: "URAI",
      description: "URAI adalah platform digital untuk mengelola sampah secara terorganisir. Platform ini membantu pengguna dalam memilah, mencatat, dan memantau proses daur ulang sampah, serta meningkatkan kesadaran akan pentingnya pengelolaan lingkungan yang berkelanjutan.",
      tech: ["Solid-js", "CSS", "Firebase", "After Effect"],
      image: "game",
      github: "https://github.com/yourusername/urai",
      vercel: "https://uraiix.vercel.app"
    },
    {
      id: 3,
      title: "Laundry Management-APP",
      description: "Saya membuat proyek Laundry Management App untuk membantu ibu saya dalam mengelola pelanggan laundry. Aplikasi ini dilengkapi dengan fitur seperti pembuatan nota digital dan pencetakan nota melalui Bluetooth printer.",
      tech: ["React Native", "Firebase"],
      image: "mockup",
      github: "https://github.com/Floostz/SalamoenLaundryAPP",
      
    },
    {
      id: 4,
      title: "Rais.Calcu",
      description: "Kalkulator lengkap",
      tech: ["Solid-js", "CSS", "Firebase"],
      image: "calcu",
      github: "https://github.com/Floostz/fawazcalcu",
      vercel: "https://fawazcalcu-ujak.vercel.app/"
    }
  ]);

  return (
    <div class="projects-container">
      <h2>Projects</h2>
      
      <div class="projects-grid">
        {projects().map(project => (
          <div class="project-card">
            <div class="project-image">
              {project.id === 1 ? (
                <video
                  src="src/assets/xirentp.mp4"
                  controls
                  autoplay
                  muted
                  loop
                  class="project-video"
                ></video>
              ) : (
                <img
                  src={`src/assets/${project.image}.png`}
                  alt={project.title}
                  class="project-img"
                />
              )}
              
              <div class="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" class="icon-circle github">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
                
                {project.vercel && (
                  <a href={project.vercel} target="_blank" rel="noopener noreferrer" class="icon-circle vercel">
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