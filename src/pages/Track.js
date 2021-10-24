import React from "react";
import "../assets/css/pages/track.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import TrackForm from "../components/TrackForm";
function Track() {
    const track = [
        {
          id: "1",
          name: "python",
          descrpiton:"Now it's time to go ahead and deploy your project. All the best!!!"
        },
        {
            id: "2",
            name: "dSA",
            descrpiton:"Now it's timviergvervgouegoiuwrhgoiuhqiuugheriuvhiugh3uoie to go ahead and deploy your project. All the best!!!"
        },
        {
            id: "3",
            name: "AIweoufwoiuhwiufh",
            descrpiton:"Now it's time to go ahead and deploy your project. All the best!!!"
        },
        {
            id: "4",
            name: "AI",
            descrpiton:"Now it's time to go ahead and deploy your project. All the best!!!"
        },
      ];
  return (

    <>
      <div className="bkg header bg-gradient-info pl-5 pt-5"></div>
      <TrackForm />
      {/* TRACK FORM */}
     <section className="present-track">
     <Row >
          <Col><h2>Present Tracks</h2></Col>
      </Row>
      <Row className="trackflex p-3" md={2} lg={3}>
          {track.map((data) => {
            return (
                <div className="trackcard p-3 mb-2" key={data.id}>

              <Col className="text-center " >
                <h3>{data.name}</h3>
                </Col>
                <Col >
                <p >{data.descrpiton}</p>
              </Col>
                </div>
            );
          })}
        </Row>
     </section>
    </>
  );
}

export default Track;
