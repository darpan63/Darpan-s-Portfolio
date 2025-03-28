
import { Code, Palette, Globe, Server, Database, GitBranch } from "lucide-react";

const About = () => {
  const skills = [
    "Python", "Java", "C++", "JavaScript", "React", "Node.js",
    "Django", "Flask", "Angular", "MongoDB", "PostgreSQL", "MySQL",
    "AWS", "Docker", "Kubernetes", "Jenkins", "TensorFlow", "PyTorch",
    "Tableau", "PowerBI", "Salesforce", "Git", "RESTful APIs", "Agile"
  ];

  const education = [
    {
      degree: "Master of Science, Computer Science",
      university: "Indiana University Bloomington",
      location: "Bloomington, IN, USA",
      period: "August 2023 - May 2025",
      gpa: "3.6/4.0",
      courses: "Applied Algorithm, Machine Learning, Computer Networks, Database Concepts"
    },
    {
      degree: "Bachelor of Engineering, Computer Engineering",
      university: "Savitribai Phule Pune University",
      location: "Pune, India",
      period: "August 2019 - June 2023",
      gpa: "3.7/4.0"
    }
  ];

  return (
    <section id="about" className="bg-portfolio-dark py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg text-white/80 mb-6">
              I'm a Computer Science graduate student at Indiana University with a strong foundation in software
              engineering and hands-on experience in full stack development, cloud infrastructure, and data-driven solutions.
              My professional journey includes roles as a Software Developer at Indiana University, Data Engineer Research Assistant,
              and internships focused on web development and MERN stack applications.
            </p>
            <p className="text-lg text-white/80 mb-8">
              My experience spans diverse environments from research and startups to enterprise systems.
              Whether I'm developing RESTful APIs with Java and Spring Boot, creating data pipelines with Python and Django,
              or building responsive web applications with React, I thrive on delivering high-performance digital experiences
              that solve real-world problems.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-portfolio-primary">{edu.degree}</h4>
                    <p className="text-white/90">{edu.university}</p>
                    <p className="text-white/70">{edu.location}</p>
                    <p className="text-white/70">{edu.period}</p>
                    {edu.gpa && <p className="text-white/70">GPA: {edu.gpa}</p>}
                    {edu.courses && <p className="text-white/70 text-sm mt-1">Coursework: {edu.courses}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">My Skills</h3>
              <div>
                {skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300">
              <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                <Code className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
              <p className="text-white/70">
                Building scalable web applications with React, Node.js, Django, Angular, and SQL/NoSQL databases, optimized for performance and user experience.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300">
              <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                <Palette className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data & Machine Learning</h3>
              <p className="text-white/70">
                Designing data pipelines, training ML models with TensorFlow and PyTorch, and creating insightful dashboards with Tableau and Power BI.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300">
              <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                <Globe className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-white/70">
                Delivering modern cloud-native solutions with AWS, Docker, and Kubernetes. Automating deployments and CI/CD workflows for speed and reliability.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300">
              <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                <Server className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">API & Backend Services</h3>
              <p className="text-white/70">
                Creating robust RESTful APIs, microservices, and serverless applications with Spring Boot, AWS Lambda, and various backend frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
