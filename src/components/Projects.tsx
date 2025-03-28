
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with user authentication, product filtering, and payment integration.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A sleek portfolio website showcasing creative work with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      skills: ["HTML/CSS", "JavaScript", "GSAP"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      skills: ["React", "Firebase", "Redux", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application providing real-time forecasts, historical data, and location-based weather alerts.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      skills: ["JavaScript", "Weather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-portfolio-dark to-portfolio-dark/95 py-20">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden h-48 sm:h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-portfolio-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.liveUrl} className="p-2 bg-white rounded-full" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} className="text-portfolio-dark" />
                  </a>
                  <a href={project.githubUrl} className="p-2 bg-white rounded-full" target="_blank" rel="noopener noreferrer">
                    <Github size={20} className="text-portfolio-dark" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-portfolio-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap">
                  {project.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
