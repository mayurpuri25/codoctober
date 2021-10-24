import React, { useState } from "react";
import "../assets/css/components/submodule.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";

function SubModules() {
  const [subModName, setSubModName] = useState("");
  const [subModDesc, setSubModDesc] = useState("");
  const params = useParams();
  const { moduleid } = params;

  const onSubmit = (e) => {
    e.preventDefault();

    const NewSubModule = {
      title: subModName,
      description: subModDesc,
    };

    fetch(`http://pathtracker123.herokuapp.com/${moduleid}/create-submodule/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(NewSubModule),
    })
      .then((res) => res.json())
      .then((res) => {
      });
    setSubModName("");
    setSubModDesc("");
  };
  return (
    <div className="fixedsubform">
      <Container className="subform">
        <Row>
          <Col className="text-center">
            <h3>Add Sub Track</h3>
          </Col>
        </Row>
        <Form onSubmit={onSubmit}>
          <Form.Group className=" mb-3">
            <Form.Label>Sub-Module Name</Form.Label>
            <Form.Control
              type="name"
              id="subinput"
              value={subModName}
              onChange={(e) => setSubModName(e.target.value)}
              placeholder="Enter Sub-Module Name"
            />
          </Form.Group>
          <Form.Group className=" mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="Description"
              id="subinput"
              value={subModDesc}
              onChange={(e) => setSubModDesc(e.target.value)}
              placeholder="Description"
            />
          </Form.Group>
          <Row>
            <Col className="text-center">
              <Button id="addsubmodule" type="submit">
                +
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default SubModules;
