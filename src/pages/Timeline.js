import React from "react";
import "../assets/css/pages/timeline.css";
import Module from "../utils/modules";
import { Link } from "react-router-dom";
import SubModules from "../components/SubModules";
function Timeline() {
  return (
    <>
      <div className="timeline">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>

        <SubModules />

        {Module.map((mod) => {
          return (
            <div
              className={
                mod.id%2 !== 0 ? "modules left" : "modules right"
              }
              key={mod.id}
            >
              <i className="icon fa fa-user"></i>
              <Link to="/resources">
                <div className="content">
                  <h2 className="log">
                    <p>{mod.module}</p>
                  </h2>
                  <p>{mod.content}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Timeline;
