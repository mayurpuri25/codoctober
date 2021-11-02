import React, { useEffect, useState } from "react";
import "../assets/css/pages/resources.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import ResourceForm from "../components/ResourceForm";
import { useParams } from "react-router";

function Resources() {
  const [resource, setResources] = useState([]);
  const [reload, setReload] = useState(false);
  const params = useParams();
  const { moduleid, submoduleid } = params;

  useEffect(() => {
    fetch(
      `https://pathtracker123.herokuapp.com/${moduleid}/${submoduleid}/list-res/`,
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
        if(res){
          setResources(res);
        }
      }).catch(error=>console.log(error));
  }, [moduleid,submoduleid,reload]);

  return (
    <>
      <div className="bkg2 header bg-gradient-info pl-5 pt-5">
        <Container className="resourceshead">
          <Row>
            <Col id="reshead">
              <span style={{ fontSize: "60px" }}>Resources</span>
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
      <Container className="resourcecontainer my-5">
        <ResourceForm reload={reload} setReload={setReload} />
        <Row className="p-3">
          <Col>
            <h4>Added Resources</h4>
          </Col>
        </Row>
        {resource.length === 0 ? (
            <Row className="my-auto d-block m-5">
              <Col className="notrack text-center p-3 mb-5">
                <h1 className="pt-4">No Resources Added</h1>
              </Col>
            </Row>
          ) :
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
        </Row>}
      </Container>
    </>
  );
}

export default Resources;
