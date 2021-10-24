import React, { useState } from 'react';
import "../assets/css/pages/track.css"
import { Container, Form, Button, Row, Col } from "react-bootstrap";


function TrackForm({reload, setReload}) {
    const [moduleName,setModuleName] = useState('');
    const [moduleDesc,setModuleDesc] = useState('');  

    const onSubmit = (e) =>{
        e.preventDefault();

        const NewModule = {
          title:moduleName,
          description:moduleDesc
      };
      
        fetch("http://pathtracker123.herokuapp.com/create-module/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(NewModule),
      })
        .then((res) => res.json())
        .then((res) => {
          
        })

        setModuleName('');
        setModuleDesc('');
      setReload(!reload);

    }
    return (
        <div>
            <Container className="trackform">
        <Row>
          <Col className="text-center">
            <h3>Add New Track</h3>
          </Col>
        </Row>
        <Form onSubmit={onSubmit}>
          <Form.Group className=" mb-3">
            <Form.Label>Track Name</Form.Label>
            <Form.Control className="inputbg"
              type="name"
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
              placeholder="Enter Track Name" required
            />
          </Form.Group>
          <Form.Group className=" mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control className="inputbg"
              type="Description"
                value={moduleDesc}
                onChange={(e) => setModuleDesc(e.target.value)}
              placeholder="Description" required
            />
          </Form.Group>
          <Row>
            <Col className="text-center">
              <Button id="addtrack" type="submit">
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
