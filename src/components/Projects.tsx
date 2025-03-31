import "../styles/Projects.css";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Harmonify",
      description:
        "A music-centric social platform with real-time track sharing that improved engagement by 40% and enhanced performance by 30% through optimized React components and backend APIs.",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Epileptic Seizure Detection",
      description:
        "Implemented a CNN-driven method for epileptic seizure identification achieving over 90% accuracy, enhanced by LSTM layers and thorough data visualization for critical clinical insights.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      skills: ["Python", "CNN", "TensorFlow", "Keras", "LSTM", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "NYC School Bus Delays Analysis",
      description:
        "Engineered an ETL pipeline for 600K+ NYC school bus delay records using Python and Airflow, storing raw data in AWS S3, transforming it in PostgreSQL, and delivering insights via Power BI dashboards.",
      image:
        "https://images.unsplash.com/photo-1580508174046-170816f65662?auto=format&fit=crop&w=800&q=80",
      skills: ["SQL", "Python", "Airflow", "AWS S3", "PostgreSQL", "Power BI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description:
        "Deployed a fully featured e-commerce platform for the Australian market using React, Node.js, and MySQL, boosting revenue by 15% and expanding the client's market presence.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      skills: ["React", "Node.js", "MySQL", "OAuth", "RESTful APIs"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
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
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="text-portfolio-dark" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="text-portfolio-dark" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">{project.description}</p>
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
