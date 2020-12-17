import React from "react";
import "./firstpage.css";

function Firstpage() {
  return (
    <div id="firstpageId" className="firstpage">
      <div className="meInfo">
        <h1 className="firstname">Matilda</h1>
        <h1 className="lastname">Näsén</h1>
        <p>
          Hello, I'am Matilda. <br></br>
          I'm a student at Umeå University, studying Master of Science in
          Engineering in Interaction Technology and Design. Doing my master
          thesis in the spring of 2021 and graduating in June same year.
        </p>

        <p>
          My main interest is UX design and front-end developing. Which I hope
          to develop and work with in the near future. Check out my portfolio
          and feel free to contact me.
        </p>
      </div>
      <div className="meImage">
        <img src="./Images/meme.jpg" className="me" />
      </div>
      <div className="arrow-down" />
    </div>
  );
}

export default Firstpage;
