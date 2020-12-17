import React from "react";
import "./footer.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaRegEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footert">
        <p>Matilda Näsén</p>
        {/* <p>CV</p> */}
        <p>|</p>
        {/* <p>matildanasen@hotmail.se</p>*/}
        <a href="/Assets/CV.pdf" download>
          Download CV
        </a>

        {/* <p>|</p> */}
      </div>
      <div className="footersocial">
        <a href="https://www.instagram.com/matildanasen/">
          {" "}
          <FaInstagram size="20" />
        </a>

        <a href="https://www.linkedin.com/in/matildanasen/">
          {" "}
          <FaLinkedinIn size="20" />
        </a>

        <a href="mailto:matildanasen@hotmail.se">
          {" "}
          <FaRegEnvelope size="20" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
