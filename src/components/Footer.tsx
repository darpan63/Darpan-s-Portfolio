
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#home"
              className="bg-white/5 p-2 rounded-full hover:bg-portfolio-primary/20 transition-colors duration-300"
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
