import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function WebD() {
  return (
    <>
      <section className="webcontainer p-3">
        <Row className="webrow">
          <Col className="w-30">
            <Image
              id="webimg"
              src="https://www.aliceinfoweb.com/admin/images/services/web%20design.jpg"
              alt=""
            />
          </Col>
          <Col className="">
            <Row className="pt-3">
              <Col id="webhead">
                <h2>Web Development</h2>
              </Col>
              <Col className="">
                <p className="available px-2 py-1">available</p>
              </Col>
            </Row>
            <Row>
              <Col className="webtext">
                <p>
                  Web Development is the practice of developing websites and web
                  apps that live on the internet. Whether you’re interested in
                  front-end, back-end, or going full-stack, the content in our
                  Web Development domain will help you get there.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/webdevelopment">
                  <Button className="learnbtn">Learn More</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default WebD;
