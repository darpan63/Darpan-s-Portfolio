
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-portfolio-bright-orange/20 blur-[100px]"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[250px] h-[250px] rounded-full bg-portfolio-bright-pink/20 blur-[100px]"></div>
      </div>
      
      <div className="section-container z-10 relative">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-card mx-auto max-w-md">
          <div className="bg-portfolio-bright-purple/20 p-6 rounded-full mb-6">
            <FileText className="w-16 h-16 text-portfolio-accent" />
          </div>
          
          <h3 className="text-2xl font-bold mb-3">Download My Resume</h3>
          <p className="text-white/70 mb-6">
            Get a comprehensive overview of my skills, experience, and qualifications.
          </p>
          
          <Button 
            asChild
            className="bg-portfolio-accent hover:bg-portfolio-accent/80 text-white flex items-center gap-2"
          >
            <a 
              href="https://drive.google.com/uc?export=download&id=1AaeRxHMa77MRUaDkXS2r9dVaWmKBdVcP" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Download size={20} />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
