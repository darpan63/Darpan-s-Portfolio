import React from "react";
import "../styles/Footer.css";
import { FiGithub } from "react-icons/fi";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";
import footerVect from "../assets/vect_asset_1.png";
const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <IoLogoLinkedin size={50} />,
      href: "https://www.linkedin.com/in/darpansakhala9/",
    },
    {
      name: "GitHub",
      icon: <FiGithub size={50} />,
      href: "https://github.com/darpan63",
    },
    {
      name: "Email",
      icon: <IoMdMail size={50} />,
      href: "mailto:darpansakhala11@gmail.com",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section-container">
        <div className="contact-links">
          {socialLinks.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer">
              <div className="social-link-card">
                {link.icon}
                <p>{link.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <img src={footerVect} className="footer-vect" />
    </section>
  );
};

export default Footer;
