import { Component } from 'solid-js';

const Skills: Component = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        { name: "SolidJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidjs/solidjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
        { name: "RustC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" },
        { name: "REST API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
        { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
        { name: "Netlify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" }
      ]
    }
  ];

  return (
    <div class="skills-container">
      <style>{`
        .skills-container {
          padding: 40px 20px;
          max-width: 1201px;
          margin: 0 auto;
        }

        .skills-container h2 {
          font-size: 3rem;
          margin-bottom: 60px;
          text-align: center;
          background: linear-gradient(135deg, #4e00ff, #00ffff, #ff00ff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
   
          font-weight: 700;
          position: relative;
        }

        .skills-container h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(to right, #4e00ff, #00ffff);
          border-radius: 2px;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .skill-categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          margin-top: 40px;
        }

        .skill-category {
          background: rgba(10, 10, 15, 0.4);
          border-radius: 20px;
          padding: 30px 25px;
          border: 1px solid rgba(78, 0, 255, 0.3);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #4e00ff, #00ffff, transparent);
          transition: left 0.8s ease;
        }

        .skill-category:hover::before {
          left: 100%;
        }

        .skill-category:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(78, 0, 255, 0.6);
          box-shadow: 0 20px 60px rgba(78, 0, 255, 0.2);
        }

        .skill-category h3 {
          margin-bottom: 25px;
          color: #ffffff;
          font-size: 1.6rem;
          font-weight: 600;
          text-align: center;
          background: linear-gradient(to right, #4e00ff, #00ffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        .skill-category h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: linear-gradient(to right, #4e00ff, #00ffff);
          border-radius: 1px;
        }

        .skill-items {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 18px;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 15px;
          background: rgba(78, 0, 255, 0.05);
          border: 2px solid rgba(78, 0, 255, 0.3);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          min-height: 100px;
          justify-content: center;
          text-align: center;
        }

        .skill-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(78, 0, 255, 0.1), rgba(0, 255, 255, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skill-item:hover::before {
          opacity: 1;
        }

        .skill-item:hover {
          background: rgba(78, 0, 255, 0.15);
          border-color: rgba(78, 0, 255, 0.8);
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 35px rgba(78, 0, 255, 0.25);
        }

        .skill-logo {
          width: 40px;
          height: 40px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 8px rgba(78, 0, 255, 0.3));
        }

        .skill-item:hover .skill-logo {
          transform: scale(1.1) rotate(5deg);
          filter: drop-shadow(0 0 12px rgba(78, 0, 255, 0.6));
        }

        .skill-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .skill-item:hover .skill-name {
          background: linear-gradient(to right, #4e00ff, #00ffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .skills-container {
            padding: 30px 15px;
          }

          .skills-container h2 {
            font-size: 2.2rem;
            margin-bottom: 40px;
          }

          .skill-categories {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .skill-category {
            padding: 25px 20px;
          }

          .skill-items {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 15px;
          }

          .skill-item {
            padding: 18px 12px;
            min-height: 90px;
          }

          .skill-logo {
            width: 35px;
            height: 35px;
            margin-bottom: 10px;
          }

          .skill-name {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .skill-items {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <h2>Skills </h2>
      <div class="skill-categories">
        {skillCategories.map(category => (
          <div class="skill-category">
            <h3>{category.title}</h3>
            <div class="skill-items">
              {category.skills.map(skill => (
                <div class="skill-item">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    class="skill-logo"
                    loading="lazy"
                  />
                  <span class="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;