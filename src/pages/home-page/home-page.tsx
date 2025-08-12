import React from "react";
import "./home-page.scss";
import TypeAnimationComponent from "../../components/TypeAnimation/type-animation";
import samuHomeImage from "../../assets/samu_hero.jpg";

const HomePage: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="home__text">
        <TypeAnimationComponent />
      </div>
      <img
        className="home__image"
        src={samuHomeImage}
        loading="lazy"
        alt="Samu"
      />
    </section>
  );
};

export default HomePage;
