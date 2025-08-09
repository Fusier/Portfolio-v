import React, { useEffect, useState } from "react";
import "./navbar.scss";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Willman_Samu_CV from "../../assets/Willman_Samu_CV.pdf";

const Navbar: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="social-icons">
        <a
          href="https://github.com/Fusier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} color="white" />
        </a>
        <a
          href="https://www.facebook.com/samu.willman.5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} color="white" />
        </a>
        <a
          href="https://fi.linkedin.com/in/samu-willman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color="white" />
        </a>
        <a
          href="https://www.instagram.com/samuwillman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} color="white" />
        </a>
      </div>

      <div className="desktop-only">
        <Button
          component="a"
          href={Willman_Samu_CV}
          download
          variant="contained"
          className="button"
          sx={{
            borderRadius: 0,
            maxWidth: "170px",
            minWidth: "120px",
          }}
          startIcon={<DownloadIcon className="vertical-align-middle" />}
        >
          Download CV
        </Button>
      </div>

      <div className="_anchor desktop-only">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>

      <div className="mobile-only burger-icon" onClick={toggleMobileNav}>
        {isMobileNavOpen ? (
          <FaTimes size={30} color="white" />
        ) : (
          <FaBars size={30} color="white" />
        )}
      </div>

      {isMobileNavOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <Link to="/home" onClick={toggleMobileNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileNav}>
                About
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={toggleMobileNav}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileNav}>
                Contact Me
              </Link>
            </li>
          </ul>
          <Button
            component="a"
            href={Willman_Samu_CV}
            download
            variant="contained"
            className="button mobile-center"
            sx={{
              borderRadius: 0,
              maxWidth: "170px",
              minWidth: "120px",
              marginTop: "10px",
            }}
            startIcon={<DownloadIcon className="vertical-align-middle" />}
          >
            Download CV
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
