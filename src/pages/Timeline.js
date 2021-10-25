import React, { useEffect, useState } from "react";
import "../assets/css/pages/timeline.css";
import SubModules from "../components/SubModules";
import { useHistory, useParams } from "react-router";

function Timeline() {
  const [subModule, setSubModule] = useState([]);
  const[reload, setReload] = useState(false);
  const params = useParams();
  const history = useHistory();
  const { moduleid } = params;

  useEffect(() => {
    fetch(`https://pathtracker123.herokuapp.com/${moduleid}/list-submodule`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setSubModule(res);
      });
  }, [moduleid,reload]);

  return (
    <>
      <div className="timeline">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>


<SubModules reload={reload}  setReload={setReload} />

        {subModule?.map((mod,i) => {
          return (
            <div
              className={i % 2 === 0 ? "modules left" : "modules right"}
              key={mod.id}
              onClick={() => history.push(`/track/${moduleid}/${mod.id}`)}
            >
              <i className="icon fa fa-user"></i>
              <div className="content">
                <h2 className="log">
                  <p>{mod.title}</p>
                </h2>
                <p>{mod.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Timeline;
