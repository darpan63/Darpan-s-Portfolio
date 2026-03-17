import "../styles/Projects.css";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "QuantVision – AI Financial Forecasting & Fraud Detection",
      description:
        "Real-time forecasting platform combining ARIMA time-series models with FinBERT sentiment analysis on live news streams (10K+ data points/day), achieving 78% anomaly-detection precision on a held-out test set.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      skills: ["Python", "Scikit-learn", "FinBERT", "Pandas", "Apache Kafka", "ARIMA"],
      liveUrl: "#",
      githubUrl: "https://github.com/darpan63",
    },
    {
      id: 2,
      title: "ChronoTalk – Agentic AI History Chatbot",
      description:
        "RAG-powered chatbot using LangChain + GPT-3 with spaCy NER for entity-aware retrieval, reducing query-response latency by 40% vs. naive retrieval, deployed on a FastAPI + React.js stack.",
      image:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
      skills: ["Python", "FastAPI", "React.js", "LangChain", "GPT-3", "spaCy", "RAG"],
      liveUrl: "#",
      githubUrl: "https://github.com/darpan63",
    },
    {
      id: 3,
      title: "Epileptic Seizure Detection – CNN-LSTM Classifier",
      description:
        "CNN-LSTM hybrid model on 11,500 EEG samples achieving 91.3% classification accuracy — an 18% false-negative reduction vs. a baseline SVM, with thorough data visualization for clinical insights.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      skills: ["Python", "TensorFlow", "Keras", "LSTM", "CNN", "NumPy", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "https://github.com/darpan63",
    },
    {
      id: 4,
      title: "SmartPayAPP – Digital Wallet & Payments",
      description:
        "Full-stack digital wallet and money transfer platform enabling users to add funds, make instant payments, and receive real-time transaction feedback — boosting transaction speed by 40% and cutting API response time by 35%.",
      image:
        "https://images.unsplash.com/photo-1639149888905-5c09c3e1cd75?auto=format&fit=crop&w=800&q=80",
      skills: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/darpan63",
    },
    {
      id: 5,
      title: "NYC School Bus Delays Analysis",
      description:
        "ETL pipeline for 600K+ NYC school bus delay records using Python and Airflow, storing raw data in AWS S3, transforming it in PostgreSQL, and delivering insights via Power BI dashboards.",
      image:
        "https://images.unsplash.com/photo-1580508174046-170816f65662?auto=format&fit=crop&w=800&q=80",
      skills: ["SQL", "Python", "Airflow", "AWS S3", "PostgreSQL", "Power BI"],
      liveUrl: "#",
      githubUrl: "https://github.com/darpan63",
    },
    {
      id: 6,
      title: "Harmonify – Music Social Platform",
      description:
        "Music-centric social platform with real-time track sharing that improved engagement by 40% and enhanced performance by 30% through optimized React components and backend APIs.",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "WebSockets"],
      liveUrl: "#",
      githubUrl: "https://github.com/darpan63",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden h-48 sm:h-56">
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
                <h3 className="text-lg font-semibold mb-2 text-white leading-snug">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1">
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
