import React from "react";
import "./projects.css";
import { db } from "../../firebase";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        this.setState({ projects: data });
      });
  }
  render() {
    const { projects } = this.state;
    return (
      <div id="projectId" className="projectMain">
        <h2>Portfolio</h2>
        <div className="flexProjects">
          {projects.map((project) => (
            <div class="example" key={project.uid}>
              <img className="projectImage" src={project.Image} />
              <div className="projectContent">
                <h3>{project.Title}</h3>
                <p>{project.Info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
