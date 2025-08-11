import React from "react";
import "./experience-page.scss";
import ResumeItem from "../../components/ResumeItem/resume-item";

const ExperiencePage: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="experience__title">Coding Experience</h2>
      <div className="experience__list">
        <ResumeItem
          title="Bitwise Oy"
          subTitle="04/2022 - 11/2024"
          description="Managed and developed features for two large-scale enterprise applications, including a product for an S&P 500 client, as part of a 20-member cross-functional Agile Scrum team. Contributed to both development and website design, collaborating with designers, product owners, and scrum masters to translate requirements into scalable, maintainable solutions. Built cross-platform features using Angular, NgRx, TypeScript, HTML, Electron and SCSS. Maintained clean architecture, implemented reusable components, and wrote automated tests with Jest to improve release reliability and reduce regression issues. Actively participated in Agile ceremonies, code reviews, and CI/CD pipeline improvements."
        />
        <ResumeItem
          title="Monad Oy"
          subTitle="05/2021 - 10/2021"
          description="Worked on NoTime.fi, a modern booking and scheduling platform, as a full-stack developer in an Agile team. Designed and implemented responsive, user-friendly interfaces using React, Redux, TypeScript, and SCSS, while building scalable back-end APIs and business logic. Contributed to UI/UX planning, component architecture, and system performance optimization. Developed unit, integration, and end-to-end tests with JUnit and Cypress to enhance quality assurance."
        />
        <ResumeItem
          title="Tampere University of Applied Sciences"
          subTitle="08/2018 - 06/2024"
          description="Earned a Bachelor’s degree in Business Information Systems, combining technical expertise with business strategy. Coursework included programming, system design, databases, web development, and project management, as well as IT strategy, entrepreneurship, and digital services. The program emphasized practical, real-world applications through team projects and Agile methodologies, preparing me to bridge the gap between development and business objectives."
        />
      </div>
    </section>
  );
};

export default ExperiencePage;
