import React from "react";
import "./about-page.scss";
import samuAboutImage from "../../assets/samu_beach.jpg";

const AboutPage: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="image-section">
          <img
            className="image"
            loading="lazy"
            src={samuAboutImage}
            alt="Samu"
          />
        </div>
        <div className="text-section">
          <h2 className="top-title">Who am I?</h2>
          <h3 className="margin">Bostonian with that Finnishing touch 😉</h3>
          <div className="sub-title">
            <p className="sub-text">
              I'm a passionate software developer with eight years of overall
              programming experience with over three of those in real-world
              production environments. I enjoy working in dynamic teams and take
              pride in building solutions that are scalable, maintainable, and
              future-ready.
            </p>
            <p className="sub-text">
              A highlight of my career was leading and maintaining a major
              product for an S&P 500 company, where I gained valuable experience
              in clean architecture, accountability, and delivering real
              business value at scale. I’ve worked on both innovative new
              projects and legacy systems — both offering unique challenges I
              enjoy solving. I'm well-versed in multiple front-end, back-end and
              cloud technologies. I love working across the full stack and
              bridging the gap between complex systems and great user
              experiences.
            </p>
            <p className="sub-text">
              I hold a degree in Business Information Systems, giving me a
              strong understanding of both technology and the business context
              that drives it. I believe the best software is built where
              technical quality meets strategic insight. I'm easygoing, curious,
              and constantly striving to improve. Whether it's refining old code
              or building something entirely new, I’m driven to create solutions
              that are not only effective today but sustainable for the future.
            </p>
            <p className="border-bottom sub-text">
              I'm originally from Finland, which has definitely influenced how I
              approach work — practical, focused, and always aiming for clean,
              efficient solutions. Outside of development, I stay active by
              going to the gym, and when I have some extra free time, I enjoy
              playing video games. Both help me recharge, stay sharp, and think
              creatively — whether I'm problem-solving in code or just taking a
              breather between projects.
            </p>
          </div>
          <div className="contact-info">
            <p>
              Name:
              <br></br>
              <span className="sub-text"> Samu Willman</span>
            </p>
            <p>
              Spoken Languages:
              <br></br>
              <span className="sub-text"> Finnish, English, Swedish</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
