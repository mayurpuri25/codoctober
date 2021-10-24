import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux"
import { setUser, selectUser } from "../../Redux/Slices/userSlice"
import { useHistory } from "react-router";

import "../../assets/css/Auth/signup.css";

export default function SignUp() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [errors,setErrors] = useState(false);
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();
const history = useHistory()

  useEffect(()=> {
    if (localStorage.getItem('token') !== null) {
      // window.location.replace('http://localhost:3000/');
      dispatch(setUser(localStorage.getItem("token")));

    } else {
      setLoading(false);
    }
  },[])
  
  const onSubmit = e => {
    e.preventDefault();

    const user = {
      name : name,
      email : email,
      password : password

    }
    console.log(user);

    fetch('https://pathtracker123.herokuapp.com/create/',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body : JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log("data sign up",data);
      if(data.name && name && email && password){
        localStorage.clear();
        localStorage.setItem("username", data.name);
        history.push("/login")
      }
      else{
        setEmail('');
        setName('');
        setPassword('');
        localStorage.clear();
        setErrors(true);
      }
    });
  };
  
  return (
    <>
    {errors === true && <h2>Cannot signup with provided credentials</h2>}
    <div className="BasicSignUp pt-4">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" value={name} placeholder="Enter your name"
            onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} placeholder="Enter email" 
          onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control type="password" value={password}
           placeholder="Enter your password" 
           onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Button id="signbtn" type="submit">
          SIGN UP
        </Button>
      </Form>
    </div>
    </>
  );
}
