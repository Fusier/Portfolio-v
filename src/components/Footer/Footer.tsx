import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  return (
    <footer className={`footer ${!isHomePage ? "footer--with-margin" : ""}`}>
      <div className="footer__copyright">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Samu Willman. All rights reserved.{" "}
          <a
            className="footer__link"
            href="https://github.com/Fusier/Portfolio-v"
          >
            Source code
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
