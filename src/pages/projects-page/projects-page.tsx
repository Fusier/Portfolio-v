import React from "react";
import "./Home-page.scss";
import MBTASchedule from "../../assets/MBTA_schedules.png";
import Card from "../../components/Card/card";

const ProjectsPage: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Featured Project</h2>
      <div className="project">
        <Card
          image={MBTASchedule}
          title="MBTA schedules"
          infotext="Timetable for MBTA train schedules"
          link="https://mbta-infotable.pages.dev/"
        />
      </div>
    </section>
  );
};

export default ProjectsPage;
