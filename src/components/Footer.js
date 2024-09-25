import "./FooterStyles.css";
import React from "react";
import { FaLinkedin,  } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-copywright">
          <h3>Designed and Developed by Grira Lotfi</h3>
        </div>
        <div className="footer-copywright">
          <h3>Copyright © {year} WB</h3>
        </div>
        <div className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/LotfiGrira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/lotfi-grira-ba22b6320/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
