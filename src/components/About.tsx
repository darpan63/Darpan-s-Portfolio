import { Code, Palette, Globe } from "lucide-react";

const About = () => {
  const skills = [
    "Python", "Java", "C++", "React", "Node.js",
    "Django", "SQL", "AWS", "Docker", "Machine Learning",
    "Git", "Kubernetes", "Tableau", "REST APIs", "HTML/CSS"
  ];

  return (
    <section id="about" className="bg-portfolio-dark py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-white/80 mb-6">
              I'm a Computer Science graduate student at Indiana University, blending a deep foundation in software
              engineering with hands-on experience across full stack development, cloud infrastructure, and data-driven solutions.
              I’ve contributed to impactful projects—from building scalable web apps to deploying machine learning models—fueled by a passion
              for solving complex problems.
            </p>
            <p className="text-lg text-white/80 mb-8">
              My experience spans diverse environments, from research and startups to enterprise-scale systems.
              Whether I’m revamping CRM platforms with Java and Spring Boot, deploying serverless pipelines on AWS,
              or designing visual insights with Tableau, I thrive on delivering high-performance digital experiences.
              Outside of code, I enjoy diving into AI trends, exploring new tech stacks, and collaborating on open-source projects.
            </p>

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
                Building scalable web apps with React, Node.js, Django, and SQL-based databases, optimized for performance and user experience.
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

            <div className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300 sm:col-span-2">
              <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                <Globe className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-white/70">
                Delivering modern cloud-native solutions with AWS, Docker, and Kubernetes. Automating deployments and CI/CD workflows for speed and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
