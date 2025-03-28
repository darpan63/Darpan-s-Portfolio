
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Form submission logic would go here
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
  };
  
  return (
    <section id="contact" className="bg-portfolio-dark py-20">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg text-white/80 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to contact me using your preferred method.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-primary/20 p-3 rounded-full">
                  <MapPin className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-white/70">Bloomington, IN</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-primary/20 p-3 rounded-full">
                  <Mail className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <a href="mailto:darpansakhala11@gmail.com" className="text-portfolio-accent hover:underline">darpansakhala11@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-primary/20 p-3 rounded-full">
                  <Phone className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <a href="tel:+19303332490" className="text-portfolio-accent hover:underline">+1 (930) 333-2490</a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-medium text-white mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-portfolio-primary/20 transition-colors duration-300">
                  <Github className="text-white" size={20} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-portfolio-primary/20 transition-colors duration-300">
                  <Linkedin className="text-white" size={20} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-portfolio-primary/20 transition-colors duration-300">
                  <Twitter className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-portfolio-primary"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-portfolio-primary"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-portfolio-primary"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="px-6 py-3 bg-portfolio-primary text-white font-medium rounded-lg hover:bg-portfolio-primary/90 transition-colors duration-300 w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
