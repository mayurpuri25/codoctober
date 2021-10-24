import React, { useState } from "react";
import "../../assets/css/Auth/auth.css";
import { ToggleButton, ToggleButtonGroup, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import Login from "./Login";
import SignUp from "./SignUp";
import logo from "../../assets/images/logo.png"

export default function Auth() {
  // const [show, setshow] = useState(true);
  const history = useHistory();

  return (
    <>
      <div className="all p-5">
        <div className="flex-container p-1">
          <Row className="m-0">
            <Row className=" px-4">
              <Col className="p-4">
                <h1 id="header"className="text-center p-3">
                 <img className="loglogo" src={logo} alt="logo" />
                </h1>

                <Row className="togglebtn">
                  <Col className="text-center">
                    
                  <ToggleButtonGroup
                    id="btngrp"
                    type="radio"
                    name="options"
                    defaultValue={1}
                    size="lg"
                  >
                    <ToggleButton
                      style={{
                        // background: "#949390",
                        background: "#55A7A0",
                        border: "none",
                        padding: "5px 5px",
                      }}
                      id="tbg-radio-1"
                      className="px-3"
                      value={1}
                      onClick={()=>history.push("/")}
                      // onClick={() => setshow(true)}
                    >
                      Log In
                    </ToggleButton>
                    <ToggleButton
                      style={{
                        // background: "#aaa9a4",
                         background: "#55A7A0",
                        border: "none",
                        padding: "5px 5px",
                      }}
                      id="tbg-radio-2"
                      value={2}
                      // onClick={() => setshow(false)}
                      onClick={()=>history.push("/signup")}

                    >
                      Sign Up
                    </ToggleButton>
                  </ToggleButtonGroup>
                  </Col>
                </Row>
                <Row>
                {/* <Login /> */}
                      <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/signup" component={SignUp} />
                         <Redirect from="*" to="/" />
                      </Switch>
                  {/* <Col className="">{show ? <Login /> : <SignUp />}</Col> */}
                </Row>
                {/* <Row>
                  <Col>
                    <h3 id="or" className="pb-3">OR</h3>
                    <div className="google p-2">
                      
                      <span><img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                        alt="google"
                      />CONTINUE WITH GOOGLE</span>
                    </div>
                  </Col>
                </Row> */}
              </Col>
            </Row>
            {/* <Col className="rightauth p-0"></Col> */}
          </Row>
        </div>
      </div>
    </>
  );
}
