import React from "react";
import CardContainer from "./ProjectsDetails";
import "./Projects.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function ProjectsCard() {
  return (
    <div>
      <Navbar />
      <h1 className="project">PROJECTS</h1>
      <div className="container">
        {CardContainer.map((value) => (
          <div className="card" key={value.title}>
            <img src={value.imagesrc} alt="img" />
            <div className="card-container">
              <h1>{value.title}</h1>

              <p>{value.desc}</p>
              <ul className="lists d-flex flex-row justify-content-start">
                <li className="css">{value.build.html}</li>
                <li>{value.build.bootstrap}</li>
                <li>{value.build.lags}</li>
              </ul>
              <div className="project-btn">
                <a
                  href={value.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live"
                  id="btn"
                >
                  Live
                </a>
                <a
                  href={value.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
