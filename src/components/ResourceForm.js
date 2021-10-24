import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";

function ResourceForm({reload, setReload}) {
  const [resName, setResName] = useState("");
  const [resUrl, setResUrl] = useState("");
  const params = useParams();
  const { moduleid, submoduleid } = params;

  const onSubmit = (e) => {
    e.preventDefault();

    const NewResource = {
      title: resName,
      url: resUrl,
    };

    fetch(
      `http://pathtracker123.herokuapp.com/${moduleid}/${submoduleid}/create-res/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(NewResource),
      }
    )
      .then((res) => res.json())
      .then((res) => {
      });

    setResName("");
    setResUrl("");
    setReload(!reload);
  };
  return (
    <>
      <Form className="p-3" onSubmit={onSubmit}>
        <h3>Add Resources</h3>
        <Row className="resourcerform pt-3" style={{ alignItems: "center" }}>
          <Col>
            <Form.Group className=" mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="name"
                value={resName}
                onChange={(e) => setResName(e.target.value)}
                placeholder="Enter Title"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className=" mb-3">
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="url"
                value={resUrl}
                onChange={(e) => setResUrl(e.target.value)}
                placeholder="Enter URL"
              />
            </Form.Group>
          </Col>
          <Col className="text-end">
            <Button id="addresource" type="submit">
              +
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default ResourceForm;
