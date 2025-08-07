import React from "react";
import "./navbar.scss";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="social-icons">
        <a
          href="https://github.com/Fusier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} color={"white"} />
        </a>
        <a
          href="https://www.facebook.com/samu.willman.5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} color={"white"} />
        </a>
        <a
          href="https://fi.linkedin.com/in/samu-willman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color={"white"} />
        </a>
        <a
          href="https://www.instagram.com/samuwillman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} color={"white"} />
        </a>
      </div>
      <Button
        variant="contained"
        className="button"
        sx={{
          borderRadius: 0,
          minWidth: "170px",
        }}
        startIcon={<DownloadIcon className="vertical-align-middle" />}
      >
        Download CV
      </Button>

      <div className="_anchor">
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
    </div>
  );
};

export default Navbar;
