import { ArrowDown, MapPin, ExternalLink } from "lucide-react";
import "../styles/Hero.css";
import darpan from "../assets/darpan_profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Profile image */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #6366f1, #22d3ee, #a78bfa, #6366f1)",
                padding: "3px",
                borderRadius: "50%",
                animation: "spin 8s linear infinite",
              }}
            />
            <div className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-full"
              style={{ border: "3px solid transparent", background: "#080d18", backgroundClip: "padding-box" }}>
              <img
                src={darpan}
                alt="Darpan Sakhala"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Floating location badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
              style={{ background: "rgba(15,25,41,0.95)", border: "1px solid rgba(129,140,248,0.3)", color: "#a5b4fc" }}>
              <MapPin size={11} className="text-cyan-400" />
              Dallas, TX
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1">

          {/* Active role badge */}
          <div className="hero-badge justify-center md:justify-start w-fit mx-auto md:mx-0 animate-fade-in">
            <span className="hero-badge-dot"></span>
            Software Engineer Analyst · VWH Capital Management
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-3 animate-fade-in leading-tight" style={{ animationDelay: "0.1s" }}>
            <span className="text-white/90">Hi, I'm</span>
            <br />
            <span id="title-name">Darpan Sakhala</span>
          </h1>

          <h2
            className="text-lg md:text-xl font-medium mb-5 animate-fade-in tracking-wide"
            style={{ animationDelay: "0.2s", color: "#94a3b8" }}
          >
            Software Engineer&nbsp;&nbsp;·&nbsp;&nbsp;AI / ML&nbsp;&nbsp;·&nbsp;&nbsp;Quantitative Finance
          </h2>

          <p
            className="text-base max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s", color: "#64748b" }}
          >
            Building production-grade agentic LLM systems, distributed data pipelines,
            and full-stack cloud solutions at the intersection of AI and software engineering.
          </p>

          <div
            className="flex flex-wrap justify-center md:justify-start gap-3 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={15} />
              View Resume
            </a>
            <a href="#projects" className="btn-outline">
              My Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10 animate-fade-in"
            style={{ animationDelay: "0.5s" }}>
            {[
              { value: "3+", label: "Years Experience" },
              { value: "$4B+", label: "AUM — Current Firm" },
              { value: "10K+", label: "Students Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-2xl font-bold" style={{ color: "#818cf8" }}>{stat.value}</p>
                <p className="text-xs" style={{ color: "#64748b" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-colors"
        style={{ color: "#475569" }}
      >
        <span className="mb-1 text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={18} />
      </a>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
