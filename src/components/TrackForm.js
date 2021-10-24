import React from 'react';
import "../assets/css/pages/track.css"
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function TrackForm() {
    return (
        <div>
            <Container className="trackform">
        <Row>
          <Col className="text-center">
            <h3>Add New Track</h3>
          </Col>
        </Row>
        <Form className="">
          <Form.Group className=" mb-3">
            <Form.Label>Track Name</Form.Label>
            <Form.Control
              type="name"
              //   value={name}
              //   onChange={(e) => set(e.target.value)}
              placeholder="Enter Track Name"
            />
          </Form.Group>
          <Form.Group className=" mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="Description"
              //   value={name}
              //   onChange={(e) => set(e.target.value)}
              placeholder="Description"
            />
          </Form.Group>
          <Row>
            <Col className="text-center">
              <Button id="loginbtn" type="submit">
                +
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
        </div>
    )
}

export default TrackForm
