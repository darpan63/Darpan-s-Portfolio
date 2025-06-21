import { ArrowDown } from "lucide-react";
import "../styles/Hero.css";
import darpan from "../assets/darpan_profile.jpg";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-portfolio-bright-blue/30 blur-[100px]"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[250px] h-[250px] rounded-full bg-portfolio-bright-purple/30 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white/20 shadow-xl">
            <img
              src={darpan}
              alt="Darpan Sakhala"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-white">Hi, I'm </span>
            <span className="text-portfolio-accent" id="title-name">
              Darpan Sakhala
            </span>
          </h1>
          <h2
            className="text-2xl md:text-3xl text-white/80 mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Full Stack Developer | Software Engineer | Data Engineer
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto md:mx-0 text-white/70 mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            With 2 years of hands-on experience, I specialize in building scalable web apps (Angular, React, Node.js), intelligent data pipelines (Python, Django, Hadoop), cloud-native solutions (AWS, GCP), and backend systems using microservices(Java, Spring Boot) and RESTful APIs.
          </p>
          <div
            className="flex justify-center md:justify-start space-x-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-portfolio-accent text-white font-medium rounded-full hover:bg-portfolio-accent/90 transition-colors duration-300"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-portfolio-accent text-white font-medium rounded-full hover:bg-portfolio-accent/90 transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-portfolio-accent text-white font-medium rounded-full hover:bg-portfolio-accent/90 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60 hover:text-white animate-bounce transition-colors"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
