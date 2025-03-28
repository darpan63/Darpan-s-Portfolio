
import { BookOpen, Code, Database, Server } from "lucide-react";

const About = () => {
  const skills = {
    programming: ["Python", "Java", "C++", "JavaScript", "HTML", "CSS", "SQL"],
    fullstack: ["React.js", "Node.js", "Angular", "Django", "Flask", "MongoDB", "PostgreSQL", "MySQL", "REST APIs"],
    devops: ["Docker", "Jenkins", "Salesforce Marketing Cloud", "Kubernetes", "AWS", "GCP", "Azure"],
    ml: ["TensorFlow", "PyTorch", "Keras", "XGBoost", "Neural Networks", "NLP", "LLM", "NumPy", "Pandas", "Scikit Learn"]
  };

  return (
    <section id="about" className="py-20 bg-portfolio-dark/80">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Education</h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 p-5 rounded-lg">
                <h4 className="text-xl font-medium text-portfolio-primary">Indiana University Bloomington</h4>
                <p className="text-white/70 mt-1">Master of Science, Computer Science</p>
                <p className="text-white/70">August 2023 - May 2025</p>
                <p className="mt-2 text-white">GPA: 3.6/4.0</p>
                <p className="mt-2 text-white/80">Relevant Coursework: Applied Algorithm, Machine Learning, Computer Networks, Database Concepts</p>
              </div>
              
              <div className="bg-white/5 p-5 rounded-lg">
                <h4 className="text-xl font-medium text-portfolio-primary">Savitribai Phule Pune University</h4>
                <p className="text-white/70 mt-1">Bachelor of Engineering, Computer Engineering</p>
                <p className="text-white/70">August 2019 - June 2023</p>
                <p className="mt-2 text-white">GPA: 3.7/4.0</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Technical Skills</h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Code className="text-portfolio-primary mr-2" size={20} />
                  <h4 className="text-lg font-medium text-white">Programming Languages</h4>
                </div>
                <div className="flex flex-wrap">
                  {skills.programming.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <BookOpen className="text-portfolio-primary mr-2" size={20} />
                  <h4 className="text-lg font-medium text-white">Full Stack Development</h4>
                </div>
                <div className="flex flex-wrap">
                  {skills.fullstack.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Server className="text-portfolio-primary mr-2" size={20} />
                  <h4 className="text-lg font-medium text-white">DevOps & Cloud</h4>
                </div>
                <div className="flex flex-wrap">
                  {skills.devops.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Database className="text-portfolio-primary mr-2" size={20} />
                  <h4 className="text-lg font-medium text-white">Machine Learning & Data</h4>
                </div>
                <div className="flex flex-wrap">
                  {skills.ml.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
