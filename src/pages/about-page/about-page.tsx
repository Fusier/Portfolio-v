import React from "react";
import "./about-page.scss";
import samuAboutImage from "../../assets/samu_about.png";

const AboutPage: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2 className="about__title">About Me</h2>
      <div className="about__content">
        <div className="about__image__wrapper">
          <img
            className="about__image__wrapper__image"
            loading="lazy"
            src={samuAboutImage}
            alt="Samu"
          />
        </div>
        <div className="about__text">
          <h2 className="about__text-heading">Who am I?</h2>
          <h3 className="about__text-subheading about__text-subheading--no-margin">
            Bostonian with that Finnishing touch 😉
          </h3>
          <div className="about__description">
            <p className="about__paragraph">
              I’m a detail-oriented software developer with over three years of
              professional experience designing, building, and maintaining
              scalable web applications. I've worked with technologies such as
              React, Angular, TypeScript, Spring Boot, Java, and AWS, and my
              background includes both front-end and back-end development, as
              well as designing clean, user-friendly websites that deliver
              excellent user experiences.
            </p>

            <p className="about__paragraph">
              My interest in coding started when I was young, but it truly
              became a passion after I began my studies in Business Information
              Systems at Tampere University of Applied Sciences. That program
              gave me the opportunity to explore software development in depth,
              and I quickly realized it was the career I wanted to pursue. I'm
              driven by the reward of creating something functional and
              well-crafted, which is why I enjoy dedicating myself to a project.
              My work has been described as “superb” and “outstanding” by
              clients, which motivates me to maintain high standards in every
              project I take on.
            </p>

            <p className="about__paragraph">
              A highlight of my career was managing and contributing to an
              enterprise product for an S&P 500 client, ensuring high
              performance, scalability, and maintainability. I participated in
              both development and design phases, collaborated in Agile Scrum
              teams, and maintained production codebases used by tens of
              thousands of users. My experience includes writing robust unit and
              end-to-end tests with Cypress, JUnit, and Jest, significantly
              improving release reliability and reducing regression issues.
            </p>

            <p className="about__paragraph">
              Beyond my work on enterprise products, I’ve delivered full-stack
              features for internal tools and integrations that improved
              interoperability between major service providers. I’m experienced
              in working with cross-functional teams, conducting code reviews,
              and contributing to CI/CD pipelines for automated AWS deployments.
              I value continuous improvement in both code quality and
              development processes, and I’m always looking for ways to make
              systems more efficient and maintainable.
            </p>

            <p className="about__paragraph about__paragraph--border-bottom">
              Originally from Finland and now based in the Boston area, I bring
              a practical, collaborative, and design-conscious approach to my
              work. My long-term goal is to lead a large-scale development
              project as a team lead, combining technical expertise with
              leadership to guide a team toward building impactful products.
              Whether refining existing systems or creating something entirely
              new, I aim to deliver solutions that are impactful today and built
              to last.
            </p>
          </div>
          <div className="about__contact">
            <p>
              Name:
              <br />
              <span className="about__contact-value sub-text">
                Samu Willman
              </span>
            </p>
            <p>
              Spoken Languages:
              <br />
              <span className="about__contact-value sub-text">
                Finnish, English, Swedish
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
