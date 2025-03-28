
import { Github, ExternalLink, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Harmonify",
      description: "A music-centric social platform with real-time track sharing that lifted engagement by 40% and improved performance by 30% through optimized React components and backend APIs.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      github: "https://github.com/Darpan-Sakhala/harmonify",
      demo: "https://harmonify-demo.vercel.app"
    },
    {
      id: 2,
      title: "Epileptic Seizure Detection using CNN",
      description: "Implemented a CNN-driven method for epileptic seizure identification achieving over 90% accuracy, further enhanced by LSTM layers and thorough data visualization for critical clinical insights.",
      tech: ["Python", "CNN", "TensorFlow", "Keras", "LSTM", "Pandas", "NumPy", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      github: "https://github.com/Darpan-Sakhala/epileptic-seizure-detection",
      demo: ""
    },
    {
      id: 3,
      title: "NYC School Bus Delays Analysis",
      description: "Engineered an ETL pipeline for 600K+ NYC school bus delay records using Python and Airflow, storing raw data in AWS S3, transforming it in PostgreSQL, and delivering insights via optimized Power BI dashboards all while reducing processing time by 45%.",
      tech: ["SQL", "Python", "Airflow", "AWS S3", "PostgreSQL", "Power BI", "Excel"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      github: "https://github.com/Darpan-Sakhala/nyc-bus-delays",
      demo: ""
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-dark/90">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project) => (
            <Card key={project.id} className="project-card bg-white/5 text-white border-portfolio-primary/20">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-portfolio-primary">{project.title}</CardTitle>
                <div className="flex flex-wrap mt-2">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="text-xs bg-portfolio-primary/20 text-white px-2 py-1 rounded mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs bg-portfolio-primary/20 text-white px-2 py-1 rounded mr-2 mb-2">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-white/70">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white/70 hover:text-portfolio-primary transition-colors duration-300"
                >
                  <Github size={18} className="mr-1" />
                  <span>Code</span>
                </a>
                
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white/70 hover:text-portfolio-primary transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Demo</span>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
