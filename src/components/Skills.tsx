import { Component } from 'solid-js';

const Skills: Component = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Vue.js",  "SolidJS", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Django",  "RustC", "GraphQL", "REST API"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Mysql"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "Vercel", "Netlify"]
    }
  ];

  return (
    <div class="skills-container">
      <h2>Skills</h2>
      <div class="skill-categories">
        {skillCategories.map(category => (
          <div class="skill-category">
            <h3>{category.title}</h3>
            <div class="skill-items">
              {category.skills.map(skill => (
                <div class="skill-item">
                  <span>{skill}</span>
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