import "../assets/css/pages/track.css";
import { Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import TrackForm from "../components/TrackForm";
import { useEffect, useState } from "react";

function Track() {
  const [module, setModule] = useState([]);
  const history = useHistory();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("http://pathtracker123.herokuapp.com/list-module/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setModule(res);
      });
  }, [!reload]);

  return (
    <>
      <div className="trackbody">
        <div className="bkg header bg-gradient-info pl-5 pt-5"></div>
        <TrackForm reload={reload} setReload={setReload} />
        {/* TRACK FORM */}
        <section className="present-track">
          <Row>
            <Col>
              <h2 className="trackhead">Present Tracks</h2>
            </Col>
          </Row>
          {module.length === 0 ? (
            <Row className="my-auto d-block">
              <Col className="notrack text-center p-3 mb-5">
                <h1>No Track Added</h1>
              </Col>
            </Row>
          ) : (
            <Row className="trackflex p-3" md={2} lg={3}>
              {module?.map((data) => {
                return (
                  <div
                    className="trackcard p-3 m-2"
                    onClick={() => history.push(`/track/${data.id}`)}
                    key={data.id}
                  >
                    <Col className="text-center ">
                      <h3>{data?.title}</h3>
                    </Col>
                    <Col>
                      <p>{data?.description}</p>
                    </Col>
                  </div>
                );
              })}
            </Row>
          )}
        </section>
      </div>
    </>
  );
}

export default Track;
