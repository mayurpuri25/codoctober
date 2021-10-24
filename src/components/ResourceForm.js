import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";


function ResourceForm() {
  return (
    <>
      {/* <Container className="trackform"> */}
        <Form className="p-3">
          <Row style={{alignItems:"center"}}>
            <Col>
              <Form.Group className=" mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="name"
                //   value={moduleName}
                //   onChange={(e) => setModuleName(e.target.value)}
                  placeholder="Enter Title"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className=" mb-3">
                <Form.Label>URL</Form.Label>
                <Form.Control
                  type="url"
                //   value={moduleName}
                //   onChange={(e) => setModuleName(e.target.value)}
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
      {/* </Container> */}
    </>
  );
}

export default ResourceForm;
