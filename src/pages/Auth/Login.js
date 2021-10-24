import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux"
import { setUser, selectUser } from "../../Redux/Slices/userSlice"
import { useHistory } from "react-router";

import "../../assets/css/Auth/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
const history = useHistory()
 const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("token") !== null && localStorage.getItem("username")) {
      dispatch(setUser( localStorage.getItem("username")));
    }
    // else if(localStorage.getItem("username") === null){
    //   history.push("/signup");
    // }
     else {
      setLoading(false);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    console.log(user);

    fetch("https://pathtracker123.herokuapp.com/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
      console.log("loginData",data, data.token)           
        if (data.token) {
          localStorage.setItem("token", data.token);
          dispatch(setUser( localStorage.getItem("username")));
        } else {
          setEmail("");
          setPassword("");
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <>
      {errors === true && <h2>Cannot Login with provided credentials</h2>}
      {loading === false && (
        <Form className="BasicLogin pt-4" onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>

          <Button id="loginbtn" type="submit">
            LOG IN
          </Button>
        </Form>
      )}
    </>
  );
}

export default Login;
