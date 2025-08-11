import React from "react";
import "./contact-page.scss";
import ContactForm from "../../components/ContactForm/contact-form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactPage: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div>
        <h2 className="contact__title">Get in Touch</h2>
      </div>
      <div className="contact__main">
        <div className="contact__column">
          <h3 className="contact__message-title">Message Me</h3>
          <ContactForm />
        </div>
        <div className="contact__column contact__column--info">
          <h3 className="contact__info-title">Contact Information</h3>
          <div className="contact__text">
            <p className="contact__text-description">
              Currently living in Boston but available for projects all around
              USA. Don't hesitate to contact me whether it's a work opportunity
              or a freelance project!
            </p>
            <div className="contact__item">
              <FaPhoneAlt
                className="contact__icon"
                color="deepskyblue"
                size={"30px"}
              />
              <p className="contact__sub-text">+1 (617) 581-8784</p>
            </div>
            <div className="contact__item">
              <MdEmail
                className="contact__icon"
                color="deepskyblue"
                size={"30px"}
              />
              <p className="contact__sub-text">samu.willman.work@gmail.com</p>
            </div>
            <div className="contact__item">
              <FaLocationDot
                className="contact__icon"
                color="deepskyblue"
                size={"30px"}
              />
              <p className="contact__sub-text">Boston, MA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
