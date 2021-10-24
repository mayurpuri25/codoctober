import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";


function ResourceForm() {
  const [resName,setResName] = useState('');
  const [resUrl,setResUrl] = useState('');

  const onSubmit = (e) =>{
    e.preventDefault();

    const NewResource = {
        name:resName,
        url:resUrl
    };
    console.log(NewResource);
    setResName('');
    setResUrl('');
}
  return (
    <>
        <Form className="p-3" onSubmit={onSubmit}>
            <h3>Add Resources</h3>
          <Row className="resourcerform pt-3" style={{alignItems:"center"}}>
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
