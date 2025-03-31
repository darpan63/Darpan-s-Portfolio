import {
  Code,
  Palette,
  Globe,
  Server,
  Database,
  GitBranch,
  Briefcase,
  Coffee,
  Languages,
  Boxes,
  Cloud,
  Terminal,
  FlaskConical,
  LayoutDashboard,
  BarChart2,
  BarChart3,
  CloudRain,
  Rocket,
  CircleDollarSign,
  Layers3,
  Share2,
  RefreshCcw,
  Shuffle,
} from "lucide-react";

import "../styles/About.css";
const About = () => {
  const skills: any[] = [
    { title: "Java", icon: <Coffee /> },
    { title: "C++", icon: <Code /> },
    { title: "JavaScript", icon: <Languages /> },
    { title: "React", icon: <Server /> },
    { title: "Node.js", icon: <Boxes /> },
    { title: "Django", icon: <FlaskConical /> },
    { title: "Angular", icon: <Terminal /> },
    { title: "MongoDB", icon: <Database /> },
    { title: "PostgreSQL", icon: <Database /> },
    { title: "MySQL", icon: <Database /> },
    { title: "AWS", icon: <Cloud /> },
    { title: "Kubernetes", icon: <CloudRain /> },
    { title: "Jenkins", icon: <Rocket /> },
    { title: "TensorFlow", icon: <LayoutDashboard /> },
    { title: "PyTorch", icon: <BarChart2 /> },
    { title: "Tableau", icon: <BarChart3 /> },
    { title: "PowerBI", icon: <CircleDollarSign /> },
    { title: "Salesforce", icon: <Layers3 /> },
    { title: "Git", icon: <GitBranch /> },
    { title: "RESTful APIs", icon: <Share2 /> },
    { title: "Agile", icon: <RefreshCcw /> },
  ];

  const education = [
    {
      degree: "Master of Science, Computer Science",
      university: "Indiana University Bloomington",
      location: "Bloomington, IN, USA",
      period: "August 2023 - May 2025",
      gpa: "3.6/4.0",
      courses:
        "Applied Algorithm, Machine Learning, Computer Networks, Database Concepts",
    },
    {
      degree: "Bachelor of Engineering, Computer Engineering",
      university: "Savitribai Phule Pune University",
      location: "Pune, India",
      period: "August 2019 - June 2023",
      gpa: "3.7/4.0",
    },
  ];

  const experience = [
    {
      position: "Software Developer",
      company: "Indiana University Bloomington",
      location: "Indiana, United States",
      period: "July 2024 - Present",
      technologies: "Java, Spring Boot, AWS Lambda, RESTful APIs, Docker, Git",
      achievements: [
        "Revamped Salesforce CRM-based applications by creating RESTful APIs with Java (Spring Boot) and JSON, decreasing data exchange latency by 25% and boosting user adoption by 30% through more efficient recruitment workflows.",
        "Introduced AWS Lambda for serverless operations, cutting infrastructure costs by 15% while standardizing Git-based version control and Docker containerization to enhance scalability and streamline deployments.",
        "Refined web-based tools with HTML, CSS, and React, improving functionality and user experience by 20% and elevating responsiveness for both internal and external users.",
      ],
    },
    {
      position: "Data Engineer Research Assistant",
      company: "Indiana University Bloomington",
      location: "Indiana, United States",
      period: "December 2024 - Present",
      technologies: "Python, Django, Tableau, MySQL",
      achievements: [
        "Designed scalable data ingestion pipelines in Python (with Django) to automate MySQL ETL processes for large-scale data scraping, accelerating throughput by 40% and supporting advanced NLP use cases for policy engagement.",
        "Created interactive dashboards in Tableau to visualize multi-layer sentiment analysis, enabling stakeholders to identify trending insights with 92% classification accuracy and reducing manual classification tasks by 35%.",
      ],
    },
    {
      position: "Software Developer Intern",
      company: "Hyphenova",
      location: "California, United States",
      period: "May 2024 - July 2024",
      technologies: "C++, MERN Stack, Kubernetes, Django",
      achievements: [
        "Developed new features for the influencer–brand matching engine using Django, PostgreSQL, C++, and Kubernetes, elevating user engagement by 25% and supporting high-traffic, event-driven workflows.",
        "Conceived and deployed personalized recommendations in a MERN environment (MongoDB, Express, React, Node.js), enhancing backend throughput by 30%.",
        "Automated data pipelines by orchestrating tasks with Docker and Git, cutting manual operations by 40% and improving release cadence.",
      ],
    },
    {
      position: "Full Stack Developer Intern",
      company: "RunwalSoft",
      location: "Maharashtra, India",
      period: "May 2022 - December 2023",
      technologies: "HTML, CSS, JavaScript, React, MySQL",
      achievements: [
        "Created web-based applications using HTML, CSS, and JavaScript with React, enabling cross-functional teams to collaborate more effectively and raising productivity by 20%.",
        "Deployed a fully featured e-commerce platform for the Australian market using React, Node.js, and MySQL, boosting revenue by 15% and expanding the client's market presence.",
        "Accelerated customer order and sales management workflows with robust security protocols (OAuth), elevating user experience and reducing order processing time by 25%.",
      ],
    },
  ];

  return (
    <section id="about" className="bg-portfolio-dark py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg text-white/80 mb-6">
              I'm a Computer Science graduate student at Indiana University with
              a strong foundation in software engineering and hands-on
              experience in full stack development, cloud infrastructure, and
              data-driven solutions. My professional journey includes roles as a
              Software Developer at Indiana University, Data Engineer Research
              Assistant, and internships focused on web development and MERN
              stack applications.
            </p>
            <p className="text-lg text-white/80 mb-8">
              My experience spans diverse environments from research and
              startups to enterprise systems. Whether I'm developing RESTful
              APIs with Java and Spring Boot, creating data pipelines with
              Python and Django, or building responsive web applications with
              React, I thrive on delivering high-performance digital experiences
              that solve real-world problems.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-portfolio-primary">
                      {edu.degree}
                    </h4>
                    <p className="text-white/90">{edu.university}</p>
                    <p className="text-white/70">{edu.location}</p>
                    <p className="text-white/70">{edu.period}</p>
                    {edu.gpa && <p className="text-white/70">GPA: {edu.gpa}</p>}
                    {edu.courses && (
                      <p className="text-white/70 text-sm mt-1">
                        Coursework: {edu.courses}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300">
              <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                <Code className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Full Stack Development
              </h3>
              <p className="text-white/70">
                Building scalable web applications with React, Node.js, Django,
                Angular, and SQL/NoSQL databases, optimized for performance and
                user experience.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300">
              <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                <Palette className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Data & Machine Learning
              </h3>
              <p className="text-white/70">
                Designing data pipelines, training ML models with TensorFlow and
                PyTorch, and creating insightful dashboards with Tableau and
                Power BI.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300">
              <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                <Globe className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-white/70">
                Delivering modern cloud-native solutions with AWS, Docker, and
                Kubernetes. Automating deployments and CI/CD workflows for speed
                and reliability.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300">
              <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                <Server className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                API & Backend Services
              </h3>
              <p className="text-white/70">
                Creating robust RESTful APIs, microservices, and serverless
                applications with Spring Boot, AWS Lambda, and various backend
                frameworks.
              </p>
            </div>
          </div>
        </div>
        <div className="skills">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-portfolio-primary/30 pb-2">
            My Skills
          </h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                {skill.icon}
                <span className="text-white/80 ml-2">{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Experience Section */}
        <div className="mt-16 experience">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-portfolio-primary/30 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-portfolio-primary/10 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-portfolio-primary/20 p-3 rounded-full mr-4">
                    <Briefcase className="text-portfolio-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-primary">
                      {exp.position}
                    </h3>
                    <p className="text-white/90">
                      {exp.company} | {exp.location}
                    </p>
                    <p className="text-white/70">{exp.period}</p>
                    <p className="text-white/80 text-sm mt-1 italic">
                      {exp.technologies}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-white/80 list-disc list-inside ml-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
