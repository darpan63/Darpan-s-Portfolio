import "../styles/Projects.css";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ChronoTalk: AI History Chatbot",
      description:
        "Crafted an AI-powered chatbot leveraging Python, TensorFlow and OpenAI GPT-3 alongside spaCy for NLP, with a Flask backendand React.js interface, increasing engagement by 40% and learning retention by 30%.",
      image:
        "https://cdn.dribbble.com/userupload/5846089/file/original-767b44564fcbd68d6fb1cc13ede505e8.png?resize=752x&vertical=center",
      skills: ["|Python", "TensorFlow", "OpenAI", "NLP", "Flask","React.js"],
      liveUrl: "https://github.com/darpan63",
      githubUrl: "https://github.com/darpan63",
    },
    {
      id: 2,
      title: "Harmonify",
      description:
        "A music-centric social platform with real-time track sharing that improved engagement by 40% and enhanced performance by 30% through optimized React components and backend APIs.",
      image:
        "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/c82a40394c80c64254ded9e9b66fdc4290f811a1",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "WebSockets"],
      liveUrl: "https://github.com/darpan63",
      githubUrl: "https://github.com/darpan63",
    },
    {
      id: 3,
      title: "Epileptic Seizure Detection",
      description:
        "Implemented a CNN-driven method for epileptic seizure identification achieving over 90% accuracy, enhanced by LSTM layers and thorough data visualization for critical clinical insights.",
      image:
        "https://www.frontiersin.org/files/Articles/578126/fnins-14-578126-HTML/image_m/fnins-14-578126-g001.jpg",
      skills: ["Python", "CNN", "TensorFlow", "Keras", "LSTM", "Matplotlib"],
      liveUrl: "https://github.com/darpan63",
      githubUrl: "https://github.com/darpan63",
    },
    {
      id: 4,
      title: "NYC School Bus Delays Analysis",
      description:
        "Engineered an ETL pipeline for 600K+ NYC school bus delay records using Python and Airflow, storing raw data in AWS S3, transforming it in PostgreSQL, and delivering insights via Power BI dashboards.",
      image:
        "https://images.pexels.com/photos/14044466/pexels-photo-14044466.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      skills: ["SQL", "Python", "Airflow", "AWS S3", "PostgreSQL", "Power BI"],
      liveUrl: "https://github.com/darpan63",
      githubUrl: "https://github.com/darpan63",
    },
    {
      id: 5,
      title: "SkyReserve",
      description:
        "A responsive flight booking platform that streamlines user interactions with Ant Design components and Tailwind-powered UI, improving booking efficiency by 35%. Built with a robust TypeScript backend using Node.js and Express for seamless data handling and API performance.",
      image:
        "https://cdn.dribbble.com/userupload/34958259/file/original-cd389f319f8906df8f3190df4b76b13f.png?resize=752x&vertical=center",
      skills: ["React", "Tailwind CSS", "Ant Design", "Node.js", "Express", "TypeScript"],
      liveUrl: "https://github.com/darpan63",
      githubUrl: "https://github.com/darpan63",
    }

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
