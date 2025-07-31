import React from "react";

import { motion } from "framer-motion";
import ResumeItem from "./ResumeItem/resumeItem";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export default function ResumeSection() {
  return (
    <div>
      <h2 className="resume-title">Experience</h2>
      <div className="resume-list">
        <div>
          <ResumeItem
            title="Bitwise Oy"
            subTitle="04/2022 - 11/2024"
            description="
Contributed to two large-scale projects for a major S&P 500 company as part of an Agile development team. My role covered both feature development and design input, working closely with designers and stakeholders to translate business requirements into scalable technical solutions. The tech stack included Angular, NgRx, TypeScript, HTML, SCSS, and AWS.
In addition to implementation, I was involved in UI/UX planning, component design, and manual and automated testing, helping ensure quality, performance, and maintainability across releases. The projects emphasized clean architecture, reusable components, and long-term scalability."
          ></ResumeItem>
          <ResumeItem
            title="Monad Oy"
            subTitle="04/2021 - 10/2021"
            description="Worked on the development of NoTime.fi, a modern booking and scheduling platform focused on streamlining appointment management for service providers and customers. I worked as a full-stack developer, using React to build a fast, responsive, and user-friendly interface, and Kotlin on the backend to develop robust, scalable APIs and business logic.
The project involved close collaboration across design and engineering, where I helped shape the user experience, build reusable components, and ensure clean integration between frontend and backend services."
          ></ResumeItem>
          <ResumeItem
            title="Tampere University of Applied Sciences"
            subTitle="06/2018 - 06/2024"
            description="Completed a multidisciplinary degree that combined software development and business fundamentals, providing a strong foundation in both the technical and strategic sides of IT. Studies focused on programming, system design, databases, web technologies, and project management, along with core business subjects like IT strategy, entrepreneurship, and digital services.

The program emphasized practical, real-world applications, teamwork, and agile methodologies. It prepared me to bridge the gap between development and business needs — equipping me to contribute to both product architecture and value-driven decision-making in professional settings."
          ></ResumeItem>
        </div>
      </div>
    </div>
  );
}
