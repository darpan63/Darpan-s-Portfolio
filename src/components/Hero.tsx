
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-portfolio-bright-orange/30 blur-[100px]"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[250px] h-[250px] rounded-full bg-portfolio-bright-pink/30 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          <span className="text-white">Hi, I'm </span>
          <span className="text-portfolio-accent">Darpan Sakhala</span>
        </h1>
        <h2
          className="text-2xl md:text-3xl text-white/80 mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Full Stack Developer | Software Engineer | Data Engineer
        </h2>
        <p
          className="text-lg max-w-2xl mx-auto text-white/70 mb-8 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          I specialize in building scalable web apps, crafting intelligent data pipelines, and engineering
          end-to-end cloud solutions. Passionate about delivering impactful digital experiences through code and collaboration.
        </p>
        <div
          className="flex justify-center space-x-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-portfolio-accent text-white font-medium rounded-full hover:bg-portfolio-accent/90 transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:border-white/40 transition-colors duration-300"
          >
            Contact Me
          </a>
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
