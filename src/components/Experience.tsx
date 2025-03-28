
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "Indiana University Bloomington",
      location: "Indiana, United States",
      period: "July 2024 - Present",
      tech: "Java, Spring Boot, AWS Lambda, RESTful APIs, Docker, Git",
      achievements: [
        "Revamped Salesforce CRM-based applications by creating RESTful APIs with Java (Spring Boot) and JSON, decreasing data exchange latency by 25% and boosting user adoption by 30% through more efficient recruitment workflows.",
        "Introduced AWS Lambda for serverless operations, cutting infrastructure costs by 15% while standardizing Git-based version control and Docker containerization to enhance scalability and streamline deployments.",
        "Refined web-based tools with HTML, CSS, and React, improving functionality and user experience by 20% and elevating responsiveness for both internal and external users."
      ]
    },
    {
      id: 2,
      title: "Data Engineer Research Assistant",
      company: "Indiana University Bloomington",
      location: "Indiana, United States",
      period: "December 2024 - Present",
      tech: "Python, Django, Tableau, MySQL",
      achievements: [
        "Designed scalable data ingestion pipelines in Python (with Django) to automate MySQL ETL processes for large-scale data scraping, accelerating throughput by 40% and supporting advanced NLP use cases for policy engagement.",
        "Created interactive dashboards in Tableau to visualize multi-layer sentiment analysis, enabling stakeholders to identify trending insights with 92% classification accuracy and reducing manual classification tasks by 35%."
      ]
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company: "Hyphenova",
      location: "California, United States",
      period: "May 2024 - July 2024",
      tech: "C++, MERN Stack, Kubernetes, Django",
      achievements: [
        "Developed new features for the influencer–brand matching engine using Django, PostgreSQL, C++, and Kubernetes, elevating user engagement by 25% and supporting high-traffic, event-driven workflows.",
        "Conceived and deployed personalized recommendations in a MERN environment (MongoDB, Express, React, Node.js), enhancing backend throughput by 30%.",
        "Automated data pipelines by orchestrating tasks with Docker and Git, cutting manual operations by 40% and improving release cadence."
      ]
    },
    {
      id: 4,
      title: "Full Stack Developer Intern",
      company: "RunwalSoft",
      location: "Maharashtra, India",
      period: "May 2022 - December 2023",
      tech: "HTML, CSS, JavaScript, React, MySQL",
      achievements: [
        "Created web-based applications using HTML, CSS, and JavaScript with React, enabling cross-functional teams to collaborate more effectively and raising productivity by 20%.",
        "Deployed a fully featured e-commerce platform for the Australian market using React, Node.js, and MySQL, boosting revenue by 15% and expanding the client's market presence.",
        "Accelerated customer order and sales management workflows with robust security protocols (OAuth), elevating user experience and reducing order processing time by 25%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-portfolio-dark">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-10 mt-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-primary">{exp.title}</h3>
                  <p className="text-white text-lg">{exp.company}</p>
                  <p className="text-white/70">{exp.location}</p>
                </div>
                
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar className="text-portfolio-primary mr-2" size={16} />
                  <span className="text-white/70">{exp.period}</span>
                </div>
              </div>
              
              <div className="bg-white/5 px-3 py-1 rounded inline-block mb-4">
                <p className="text-sm text-white/80">{exp.tech}</p>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="flex">
                    <Briefcase className="text-portfolio-primary mr-3 mt-1 flex-shrink-0" size={16} />
                    <p className="text-white/80">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
