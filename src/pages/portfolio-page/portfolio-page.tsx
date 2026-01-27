import React from "react";
import "./portfolio-page.scss";
import { Grid, Container } from "@mui/material";
import PortfolioCard from "../../components/Card/Card";
import Portfolio_1 from "../../assets/Portfolio_1.png";
import Portfolio_2 from "../../assets/Portfolio_2.png";
import Portfolio_3 from "../../assets/Portfolio_3.png";

const PortfolioPage: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <Container className="portfolio__container">
        <Grid container spacing={3}>
          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PortfolioCard
              title="Sentiment Analysis Engine"
              description="Neural network built from scratch in Python using IMDB dataset. No external ML libraries."
              image={Portfolio_1}
              link="https://sentiment-analysis-89d.pages.dev/"
            />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PortfolioCard
              title="MBTA Infotable"
              description="Streamlined, real-time dashboard designed for commuters utilizing the Brookline Hills MBTA stop. It inludes live train and weather tracking."
              image={Portfolio_2}
              link="https://mbta-infotable.pages.dev/"
            />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PortfolioCard
              title="Serverless Portfolio"
              description="Custom-built, component-driven portfolio designed to showcase me as a developer."
              image={Portfolio_3}
              link="/"
            />
          </Grid>
        </Grid>
      </Container>
      <h2 className="portfolio__bottom__title">...and many more to come!</h2>
    </section>
  );
};

export default PortfolioPage;
