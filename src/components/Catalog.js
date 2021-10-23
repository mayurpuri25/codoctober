import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/components/catalog.css";
import WebD from "./WebD";

function Catalog() {
  return (
    <>
      <Container className="pt-3">
        <Row>
          <Col className="text-center">
            <h1>Catalog</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Technology</h3>
          </Col>
        </Row>
        <Row className="webrow">
          <Col>
            <WebD />
            {/* Web Course Section*/}
          </Col>
        </Row>
        <Row className="othersection p-3">
          {/* <Col id="other">
            <Image src="https://miro.medium.com/max/2000/1*9g2hSDNT3Cao2vh1HMO35A.jpeg" height="100px"></Image>
          </Col> */}

          <Col id="other">
            <h3>Learn DSA</h3>
          </Col>
          <Col id="other">
            <h3>Learn Python</h3>
          </Col>
          <Col id="other">
            <h3>Learn AI</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Catalog;
