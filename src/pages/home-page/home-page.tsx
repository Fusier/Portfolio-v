import React from "react";
import "./home-page.scss";
import TypeAnimationComponent from "../../components/TypeAnimation/TypeAnimation";
import samuHomeImage from "../../assets/black_test4.jpg";

const HomePage: React.FC = () => {
  return (
    <div className="homepage" id="home">
      <section className="home-section">
        <div className="text-section">
          <h4 className="_margin">
            <TypeAnimationComponent />
          </h4>
          <h5 className="sub-title">An independent web developer</h5>
        </div>
        <div className="image-section">
          <img className="image" src={samuHomeImage} alt="Samu" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
