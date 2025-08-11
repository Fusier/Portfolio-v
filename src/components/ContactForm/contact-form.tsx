import React, { useState } from "react";
import "./contact-form.scss";
import { Button } from "@mui/material";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sentState, setSentState] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xjkojwgw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setSentState(true);
      } else {
        setSentState(false);
      }
    } catch {
      setSentState(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__group">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="contact-form__input"
        />
      </div>

      <div className="contact-form__group">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Your Phone Number"
          className="contact-form__input"
        />
      </div>

      <div className="contact-form__group">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
          className="contact-form__input"
        />
      </div>

      <div className="contact-form__group">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact-form__textarea"
          required
          placeholder="Your Message"
        ></textarea>
      </div>

      <Button
        variant="contained"
        className="contact-form__button"
        sx={{
          borderRadius: 0,
        }}
        type="submit"
      >
        Submit
      </Button>
      {sentState === true && <p className="contact-form__sent">Sent!</p>}
      {sentState === false && <p className="contact-form__error">Error!</p>}
    </form>
  );
};

export default ContactForm;
