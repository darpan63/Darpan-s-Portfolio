
import { ArrowUp, Mail, Linkedin, Github, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Darpan Sakhala. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:darpansakhala11@gmail.com"
              className="text-white/70 hover:text-portfolio-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/Darpan-Sakhala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-portfolio-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Darpan-Sakhala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-portfolio-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="tel:+19303332490"
              className="text-white/70 hover:text-portfolio-primary transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a 
              href="#home"
              className="bg-white/5 p-2 rounded-full hover:bg-portfolio-primary/20 transition-colors duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="text-white" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
