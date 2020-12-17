import React from "react";
import "./contact.css";
import { db } from "../../firebase";

function Contact() {
  return (
    <div id="contactId" className="contact">
      <div className="content">
        <h2>Get in touch</h2>
        <p>
          Do you want to know more about me or my work? <br></br> Or do you have
          a project to dicuss? <br /> Contact me on LinkedIn or send me an
          email! <br />
          <br />
          LinkedIn | <a href="linkedin.com/in/matildanasen/">matildanasen</a>
          <br />
          Email |{" "}
          <a href="mailto:matildanasen@hotmail.se">matildanasen@hotmail.se</a>
        </p>
        <a href="/Assets/CV.pdf" download>
          <button class="CVbutton"> DOWNLOAD CV</button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
