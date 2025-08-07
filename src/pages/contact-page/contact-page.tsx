import React from "react";
import "./contact-page.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactPage: React.FC = () => {
  return (
    <section id="contact" className="form-section">
      <div>
        <h2 className="about-title">Get in Touch</h2>
      </div>
      <div className="main">
        <div className="column">
          <h3 className="message-me">Message Me</h3>
          <ContactForm />
        </div>
        <div className="column">
          <h3 className="contact-title">Contact Information</h3>
          <div className="contact-text">
            <p className="sub-text contact-title">
              Currently living in Boston but available for projects all around
              USA. Don't hesitate to contact me whether it's a work opportunity
              or a freelance project!
            </p>
            <div className="contact-item">
              <FaPhoneAlt className="icon" color="deepskyblue" size={"30px"} />
              <p className="sub-text">+1 (617) 581-8784</p>
            </div>
            <div className="contact-item">
              <MdEmail className="icon" color="deepskyblue" size={"30px"} />
              <p className="sub-text">samu.willman.usa@gmail.com</p>
            </div>
            <div className="contact-item">
              <FaLocationDot
                className="icon"
                color="deepskyblue"
                size={"30px"}
              />
              <p className="sub-text">Boston, MA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
