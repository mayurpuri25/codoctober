import React from 'react'
import { Card } from "react-bootstrap"

function Note({title, text, date}) {
    return (
        <>
            <Card>
                <Card.Header>
                    <h3>{title}</h3>
                </Card.Header>
                <Card.Body className="noteBody">
                    <p>{text}</p>
                    <h4>{date}</h4>
                </Card.Body>
            </Card>
        </>
    )
}

export default Note;

