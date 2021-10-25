import React from "react";
import "../../assets/css/Auth/auth.css";
import { ToggleButton, ToggleButtonGroup, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import Login from "./Login";
import SignUp from "./SignUp";
import logo from "../../assets/images/logo.png"

export default function Auth() {
  const history = useHistory();

  return (
    <>
      <div className="all p-5">
        <div className="flex-container p-1">
          <Row className="authrow m-0 ">
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
                        background: "#55A7A0",
                        border: "none",
                        padding: "5px 5px",
                      }}
                      id="tbg-radio-1"
                      className="px-3"
                      value={1}
                      onClick={()=>history.push("/")}
                    >
                      Log In
                    </ToggleButton>
                    <ToggleButton
                      style={{
                         background: "#55A7A0",
                        border: "none",
                        padding: "5px 5px",
                      }}
                      id="tbg-radio-2"
                      value={2}
                      onClick={()=>history.push("/signup")}

                    >
                      Sign Up
                    </ToggleButton>
                  </ToggleButtonGroup>
                  </Col>
                </Row>
                <Row>
                      <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/signup" component={SignUp} />
                         <Redirect from="*" to="/" />
                      </Switch>
                </Row>
              </Col>
            </Row>
          </Row>
        </div>
      </div>
    </>
  );
}
