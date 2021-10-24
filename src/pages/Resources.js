import React, { useEffect, useState } from "react";
import "../assets/css/pages/resources.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import ResourceForm from "../components/ResourceForm";
import { useParams } from "react-router";

function Resources() {
  const [resource, setResources] = useState([]);
  const params = useParams();
  const { moduleid, submoduleid } = params;

  useEffect(() => {
    fetch(
      `http://pathtracker123.herokuapp.com/${moduleid}/${submoduleid}/list-res/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setResources(res);
      });
  }, [moduleid,submoduleid]);

  return (
    <>
      <div className="bkg2 header bg-gradient-info pl-5 pt-5">
        <Container className="resourceshead">
          {/* <Row>
            <Col id="reshead">
              <span style={{ fontSize: "60px" }}>JavaScript</span>
            </Col>
          </Row>
          <Row>
            <Col id="resdesc">
              <p>
                
              </p>
            </Col>
          </Row> */}
        </Container>
      </div>
      <Container className="resourcecontainer my-5">
        <ResourceForm />
        <Row className="p-3">
          <Col>
            <h4>Added Resources</h4>
          </Col>
        </Row>
        <Row className="p-3" sm={1} md={3} lg={4} xl={5}>
          {resource?.map((item) => {
            return (
              <Row className="redirectrow p-2 m-1" key={item.id}>
                <Col>{item.title}</Col>
                <Col className="redirectbtncol text-end">
                  <Button className="redirectbtn" onClick={()=>window.open(item.url)}>
                   Go
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Resources;
