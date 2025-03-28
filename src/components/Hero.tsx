
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-portfolio-dark z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/10 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Hello, I'm </span>
            <span className="text-portfolio-primary">Darpan Sakhala</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/80 mb-8">
            Software Developer & Data Engineer
          </h2>
          
          <p className="text-white/70 max-w-2xl mb-10 text-lg">
            Specializing in full-stack development with expertise in React, Node.js, Python, and data engineering solutions.
            Building innovative applications with a focus on performance and user experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="mailto:darpansakhala11@gmail.com" aria-label="Email">
              <Button variant="outline" className="flex items-center gap-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white">
                <Mail size={18} />
                Contact Me
              </Button>
            </a>
            
            <a href="#projects" aria-label="View Projects">
              <Button className="flex items-center gap-2 bg-portfolio-primary text-white hover:bg-portfolio-primary/90">
                View My Work
              </Button>
            </a>
          </div>
          
          <div className="flex space-x-6 mb-12">
            <a 
              href="https://github.com/Darpan-Sakhala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-portfolio-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/Darpan-Sakhala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-portfolio-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:darpansakhala11@gmail.com"
              className="text-white/70 hover:text-portfolio-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+19303332490"
              className="text-white/70 hover:text-portfolio-primary transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>
          
          <a 
            href="#about" 
            className="flex items-center justify-center animate-bounce w-10 h-10 rounded-full bg-white/5 hover:bg-portfolio-primary/20 transition-colors duration-300"
            aria-label="Scroll Down"
          >
            <ArrowDown className="text-white" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
