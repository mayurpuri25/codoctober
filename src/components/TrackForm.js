import React, { useState } from 'react';
import "../assets/css/pages/track.css"
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import {addModule} from "../Redux/Slices/moduleSlice"
import {useDispatch} from "react-redux"


function TrackForm() {
    const [moduleName,setModuleName] = useState('');
    const [moduleDesc,setModuleDesc] = useState('');

    const dispatch = useDispatch();
    const onSubmit = (e) =>{
        e.preventDefault();

        const NewModule = {
            name:moduleName,
            description:moduleDesc
        };
        console.log(NewModule);
        setModuleName('');
        setModuleDesc('');
        dispatch(addModule(NewModule));
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
            <Form.Control
              type="name"
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
              placeholder="Enter Track Name"
            />
          </Form.Group>
          <Form.Group className=" mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="Description"
                value={moduleDesc}
                onChange={(e) => setModuleDesc(e.target.value)}
              placeholder="Description"
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
