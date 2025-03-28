
import { Code, Palette, Globe } from "lucide-react";

const About = () => {
  const skills = [
    "HTML/CSS", "JavaScript", "React", "TypeScript", "Node.js", 
    "Tailwind CSS", "UI/UX Design", "Responsive Design", "Git"
  ];

  return (
    <section id="about" className="bg-portfolio-dark py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-white/80 mb-6">
              I'm a passionate web developer with a strong focus on creating 
              intuitive and engaging user experiences. With a background in 
              both design and development, I bring a unique perspective to 
              every project.
            </p>
            <p className="text-lg text-white/80 mb-8">
              When I'm not coding, you can find me exploring new design trends, 
              contributing to open-source projects, or enjoying outdoor activities.
              I'm constantly learning and expanding my skillset to stay at the 
              forefront of web development.
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
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-white/70">
                Building responsive, performant websites and applications using modern technologies.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300">
              <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                <Palette className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-white/70">
                Creating beautiful, intuitive interfaces that provide exceptional user experiences.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg hover:shadow-md hover:shadow-portfolio-primary/10 transition-all duration-300 sm:col-span-2">
              <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mb-4">
                <Globe className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Solutions</h3>
              <p className="text-white/70">
                Providing end-to-end solutions from concept to deployment, ensuring your digital presence stands out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
