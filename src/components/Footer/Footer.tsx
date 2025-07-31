import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <p className="text">
          &copy; {new Date().getFullYear()} Samu Willman. All rights reserved.{" "}
          <a className="text" href="https://github.com/Fusier">
            Source code
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
