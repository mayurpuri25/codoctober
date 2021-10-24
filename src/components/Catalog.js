import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/components/catalog.css";
// import WebD from "./WebD";

function Catalog() {
  const cat = [
    {
      id: "1",
      name: "python",
    },
    {
      id: "2",
      name: "dSA",
    },
    {
      id: "3",
      name: "AI",
    },
  ];
  return (
    <>
      <Container className="pt-3" id="catalog">
        <Row>
          <Col className="text-center p-2">
            <h1>Latest Catalog</h1>
          </Col>
        </Row>
        <Row className="webrow">
          <Col>
            {/* <WebD /> */}
            {/* Web Course Section*/}
          </Col>
        </Row>
        <Container>


        <Row className="othersection p-3" md={2} lg={3}>
          {cat.map((data) => {
            return (
              <Col id="other" key={data.id}>
                <h3>{data.name}</h3>
              </Col>
            );
          })}
        </Row>
        </Container>
      </Container>
    </>
  );
}

export default Catalog;
