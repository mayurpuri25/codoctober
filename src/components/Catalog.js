import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/components/catalog.css";
import { useHistory } from "react-router";

function Catalog() {
  const [catalog, setCatalog] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://pathtracker123.herokuapp.com/list-module/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCatalog(res);
      });
  }, []);

  return (
    <>
      <Container className="pt-3" id="catalog">
        <Row>
          <Col className="text-center p-2">
            <h1>Latest Catalog</h1>
          </Col>
        </Row>
        <Container>
          <Row className="othersection p-3" md={2} lg={3}>
            {catalog
              ?.map((data) => {
                return (
                  <div
                  className="trackcard p-3 m-2"
                  onClick={() => history.push(`/track/${data.id}`)}
                  key={data.id}
                >
                  <Col className="text-center ">
                    <h3>{data?.title}</h3>
                  </Col>
                </div>
                );
              })
              .slice(0, 6)}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Catalog;
