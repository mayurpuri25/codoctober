import React from 'react';
import { Row, Col } from "react-bootstrap"
import NotesForm from './NotesForm';
import Note from "./Note";

function AllNotes() {
    return (
        <>
            <NotesForm />
            <Row>
                <Col lg={6} >
                    <Note />
                </Col>
            </Row>
        </>
    )
}

export default AllNotes

