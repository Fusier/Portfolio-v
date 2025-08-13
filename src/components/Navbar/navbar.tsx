import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Willman_Samu_CV from "../../assets/Willman_Samu_CV.pdf";
import { motion } from "framer-motion";

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
      <div className="navbar__social-icons">
        <a
          href="https://fi.linkedin.com/in/samu-willman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color="white" />
        </a>
        <a
          href="https://github.com/Fusier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} color="white" />
        </a>
      </div>

      <div className="navbar__cv-button-wrapper navbar__desktop-only">
        <Button
          component="a"
          href={Willman_Samu_CV}
          download
          variant="contained"
          className="navbar__cv-button"
          sx={{
            borderRadius: 0,
            maxWidth: "170px",
            minWidth: "120px",
          }}
          startIcon={<DownloadIcon className="navbar__icon--vertical-middle" />}
        >
          Download CV
        </Button>
      </div>

      <div className="navbar__links navbar__desktop-only">
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/experience">Experience</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>

      <div
        className="navbar__burger navbar__mobile-only"
        onClick={toggleMobileNav}
      >
        {isMobileNavOpen ? (
          <FaTimes size={30} color="white" />
        ) : (
          <FaBars size={30} color="white" />
        )}
      </div>

      {isMobileNavOpen && (
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="navbar__mobile-menu"
        >
          <ul className="navbar__mobile-list">
            <li className="navbar__mobile-item">
              <Link to="/home" onClick={toggleMobileNav}>
                Home
              </Link>
            </li>
            <li className="navbar__mobile-item">
              <Link to="/about" onClick={toggleMobileNav}>
                About
              </Link>
            </li>
            <li className="navbar__mobile-item">
              <Link to="/experience" onClick={toggleMobileNav}>
                Experience
              </Link>
            </li>
            <li className="navbar__mobile-item">
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
            className="navbar__cv-button navbar__mobile-center"
            sx={{
              borderRadius: 0,
              maxWidth: "170px",
              minWidth: "120px",
            }}
            startIcon={
              <DownloadIcon className="navbar__icon--vertical-middle" />
            }
          >
            Download CV
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
