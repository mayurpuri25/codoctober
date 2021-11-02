import React, { useState } from "react";
import "../assets/css/components/submodule.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";

function SubModules({ reload, setReload}) {
  const [subModName, setSubModName] = useState("");
  const [subModDesc, setSubModDesc] = useState("");
  const params = useParams();
  const [disable,setDisable] = useState(true);

  const { moduleid } = params;

  const onSubmit = (e) => {
    e.preventDefault();

    const NewSubModule = {
      title: subModName,
      description: subModDesc,
    };

    fetch(`https://pathtracker123.herokuapp.com/${moduleid}/create-submodule/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(NewSubModule),
    })
      .then((res) => {
        setSubModName("");
        setSubModDesc("");
        setReload(prev=>!prev);
      });
  };
  return (
    <div className="fixedsubform">
      {disable?<Button className="onform" onClick={()=>setDisable(false)}>+</Button>
      :
      <Container className="subform">
        <Row>
          <Col className="text-end"><Button className="closeform mb-2"  onClick={()=>setDisable(true)}>x</Button></Col>
        </Row>
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
              placeholder="Enter Sub-Module"
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
      </Container>}
    </div>
  );
}

export default SubModules;
