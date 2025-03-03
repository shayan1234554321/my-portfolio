import { GithubIcon, LinkedinIcon } from "@/elements/icons";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h4>
        <a
          href="https://drive.google.com/file/d/1F2JBp2dJQPEXN0SUkdX-NWJy8-qWrt_A/view"
          target="_blank"
        >
          RESUME
        </a>
      </h4>

      <div className="socialIcons">
        <a
          href="https://www.linkedin.com/in/shayan-khan20/"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/shayan1234554321"
          target="_blank"
        >
          <GithubIcon color={"var(--text)"} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
