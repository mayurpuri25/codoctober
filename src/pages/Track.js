import React, { useState } from "react";
import "../assets/css/pages/track.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TrackForm from "../components/TrackForm";
import {useSelector} from "react-redux"
import {selectModule} from "../Redux/Slices/moduleSlice"

function Track() {

    const track = useSelector(selectModule)
    console.log("redux modules",track, track.name,track.description)

  return (
    <>
      <div className="bkg header bg-gradient-info pl-5 pt-5"></div>
      <TrackForm />
      {/* TRACK FORM */}
      <section className="present-track">
        <Row>
          <Col>
            <h2>Present Tracks</h2>
          </Col>
        </Row>
        <Row className="trackflex p-3" md={2} lg={3}>
          {track.map((data) => {
            return (
                <div className="trackcard p-3 mb-2" key={data.id}>
                  <Link to="/timeline">
              <Col className="text-center " >
                <h3>{data?.name}</h3>
                </Col>
                <Col >
                <p >{data?.description}</p>
              </Col>
                  </Link>
                </div>
            );
          })}
        </Row>
      </section>
    </>
  );
}

export default Track;
