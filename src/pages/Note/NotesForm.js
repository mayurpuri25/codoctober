import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import "../../assets/css/pages/Note.css"

const NotesForm= ()=> {

    const [note, setNote] = useState({
        title : "",
        text : ""
    })
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setNote((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    console.log(note);
    return (
        <>
            <div className="bg-primary bg-gradient py-3 " >
                <Container className="pt-5" >
                    <form className="notesForm" onSubmit={handleSubmit} >
                        <input 
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={note.value}
                        onChange={handleChange}
                        />
                        <textarea
                        name="text"
                        onChange={handleChange}
                        value={note.text}
                        placeholder="Write your Notes here"
                        rows="4"
                        />

                        <Button color="primary">Add</Button>
                    </form>
                </Container>
            </div>
        </>
    )
}

export default NotesForm

