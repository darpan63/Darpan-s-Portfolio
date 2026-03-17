import {
  Code,
  Globe,
  Brain,
  TrendingUp,
  GraduationCap,
} from "lucide-react";

import "../styles/About.css";

const About = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Spring Boot", "FastAPI", "Django", "Flask", "Angular"],
    },
    {
      category: "AI / ML",
      skills: [
        "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "LangChain",
        "RAG Pipelines", "LLM APIs (Claude, GPT-4)", "Agentic Workflows", "NLP", "XGBoost",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (Lambda, EC2, S3, ECS)", "Docker", "Kubernetes", "Jenkins", "CI/CD", "GitHub Actions"],
    },
    {
      category: "Data & Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Apache Kafka", "Tableau", "NumPy", "Pandas"],
    },
    {
      category: "Tools & Practices",
      skills: ["Git", "REST APIs", "Microservices", "Distributed Systems", "System Design", "Agile/Scrum"],
    },
  ];

  const education = [
    {
      degree: "M.S. Computer Science",
      university: "Indiana University Bloomington",
      location: "Bloomington, IN, USA",
      period: "Aug 2023 – May 2025",
      gpa: "3.6 / 4.0",
      courses: "Algorithms, Machine Learning, Computer Networks, Database Systems",
    },
    {
      degree: "B.E. Computer Engineering",
      university: "Savitribai Phule Pune University",
      location: "Pune, India",
      period: "Aug 2019 – Jun 2023",
      gpa: "3.7 / 4.0",
    },
  ];

  const experience = [
    {
      position: "Software Engineer Analyst — Quantitative Finance",
      company: "VWH Capital Management ($4B+ AUM)",
      location: "Dallas, TX",
      period: "Aug 2025 – Present",
      technologies: "Python, SQL, LLM APIs (Claude, GPT-4), Apache Kafka, Tableau, Redis",
      achievements: [
        "Engineered systematic ETL pipelines and data-driven analytical tools in Python and SQL to process large-scale distressed credit and capital market datasets, decomposing complex fixed income positions into actionable pricing signals, relative value insights, and risk metrics for senior traders.",
        "Optimized high-frequency SQL query execution across 5+ trading data pipelines — introducing composite indexing and Redis caching — reducing data latency by 60% and powering sub-second Tableau dashboards consumed daily by 12 senior traders.",
        "Developed production-grade agentic LLM workflows (Claude, GPT-4) with streaming and cost optimization to automate financial specification validation and accelerate backtesting model development, cutting manual research time by ~35%.",
      ],
    },
    {
      position: "Software Engineer",
      company: "Indiana University – Office of Enrollment",
      location: "Bloomington, IN",
      period: "Jul 2024 – Jul 2025",
      technologies: "Java, Spring Boot, AWS Lambda, Docker, React, TypeScript, REST APIs",
      achievements: [
        "Migrated a monolithic Salesforce CRM into 6 independent Spring Boot microservices with RESTful APIs triggered via AWS Lambda, reducing inter-service latency by ~30% and serving 10,000+ students.",
        "Deployed automated CI/CD pipelines with Docker containerization, eliminating ~8 hrs/week of manual deployment work and cutting monthly infrastructure costs by 15%.",
        "Refactored legacy frontend into a modular React + TypeScript architecture, improving Lighthouse performance score by 25 pts and boosting user adoption by 20%.",
      ],
    },
    {
      position: "Software Developer Intern",
      company: "Hyphenova",
      location: "California, USA",
      period: "May 2024 – Jul 2024",
      technologies: "C++, Apache Kafka, Redis, Jenkins, Docker, Git",
      achievements: [
        "Accelerated influencer-brand match engagement by 25% by rewriting 3 performance-critical C++ modules and integrating Kafka event streams for real-time processing at 50K+ events/second, while cutting API response latency from ~180ms to ~80ms via Redis in-memory caching.",
        "Automated Jenkins CI/CD pipelines and containerized 4 backend services with Docker, compressing release cycles from 3 days to under 6 hours and reducing manual deployment effort by 40%.",
      ],
    },
    {
      position: "Full Stack Developer Intern",
      company: "RunwalSoft",
      location: "Pune, India",
      period: "May 2022 – Dec 2022",
      technologies: "Angular, React, Node.js, MongoDB, TypeScript",
      achievements: [
        "Launched a full-stack e-commerce platform using Angular, React, Node.js, and MongoDB, driving a 40% increase in online sales within 6 months of deployment.",
        "Streamlined backend API workflows and MongoDB aggregation pipelines, cutting order fulfillment time by 25% for a system processing 500+ orders/month.",
      ],
    },
  ];

  const specialties = [
    {
      icon: <Code className="text-portfolio-primary" size={24} />,
      title: "Full Stack Development",
      description:
        "Building scalable web applications with React, Node.js, Spring Boot, Django, FastAPI, and SQL/NoSQL databases, optimized for performance and user experience.",
    },
    {
      icon: <Brain className="text-portfolio-primary" size={24} />,
      title: "AI / ML & LLM Engineering",
      description:
        "Designing agentic LLM workflows (Claude, GPT-4), RAG pipelines, and ML models with PyTorch, TensorFlow, LangChain, and Scikit-learn for real-world production use.",
    },
    {
      icon: <Globe className="text-portfolio-primary" size={24} />,
      title: "Cloud & DevOps",
      description:
        "Delivering cloud-native solutions with AWS (Lambda, EC2, S3, ECS), Docker, Kubernetes, and CI/CD pipelines for speed, reliability, and scale.",
    },
    {
      icon: <TrendingUp className="text-portfolio-primary" size={24} />,
      title: "Data Engineering & Analytics",
      description:
        "Engineering ETL pipelines, real-time Kafka streams, and Tableau dashboards to turn raw data into actionable insights for trading teams and decision-makers.",
    },
  ];

  return (
    <section id="about" className="bg-portfolio-dark py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg text-white/80 mb-6">
              I'm a Software Engineer Analyst at VWH Capital Management, a $4B+ AUM
              quantitative credit fund in Dallas, TX, where I build agentic LLM
              workflows, systematic ETL pipelines, and real-time trading analytics.
              I hold an M.S. in Computer Science from Indiana University Bloomington (GPA 3.6)
              with expertise across full-stack development, AI/ML, and distributed systems.
            </p>
            <p className="text-lg text-white/80 mb-8">
              My work spans from engineering production-grade LLM applications with Claude
              and GPT-4, to optimizing high-frequency SQL data pipelines that power sub-second
              Tableau dashboards for senior traders. I thrive at the intersection of software
              engineering and AI — writing clean, performant code that solves hard problems at scale.
            </p>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-portfolio-primary" size={22} />
                <span>Education</span>
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="font-semibold text-portfolio-primary">{edu.degree}</h4>
                    <p className="text-white/90 font-medium">{edu.university}</p>
                    <p className="text-white/60 text-sm">{edu.location} · {edu.period}</p>
                    {edu.gpa && (
                      <p className="text-white/70 text-sm mt-1">GPA: {edu.gpa}</p>
                    )}
                    {edu.courses && (
                      <p className="text-white/60 text-sm mt-1">
                        Coursework: {edu.courses}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specialty Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specialties.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300 border border-white/10"
              >
                <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-white/70">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills by Category */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-portfolio-primary/30 pb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className="bg-white/5 p-5 rounded-lg border border-white/10 hover:border-portfolio-primary/40 transition-all duration-300"
              >
                <h3 className="text-portfolio-primary font-semibold mb-3 text-sm uppercase tracking-wider">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-16 experience">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-portfolio-primary/30 pb-2">
            Professional Experience
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-portfolio-primary/20"></div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative md:pl-16 bg-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-portfolio-primary/10 transition-all duration-300 border border-white/10"
                >
                  <div className="hidden md:flex absolute left-3.5 top-7 w-5 h-5 rounded-full bg-portfolio-primary/80 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-1">
                    <div>
                      <h3 className="text-lg font-semibold text-portfolio-primary leading-tight">
                        {exp.position}
                      </h3>
                      <p className="text-white/90 font-medium">{exp.company}</p>
                      <p className="text-white/60 text-sm">{exp.location}</p>
                    </div>
                    <span className="text-white/50 text-sm shrink-0 mt-1 sm:text-right whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-white/50 text-xs italic mb-3">{exp.technologies}</p>
                  <ul className="space-y-2 text-white/75 list-disc list-inside ml-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
