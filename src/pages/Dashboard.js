import React from "react";
import "../assets/css/pages/dashboard.css";
import Catalog from "../components/Catalog";

function Dashboard() {
  return (
    <>
      <section className="d-block w-100">
        <img className="banner"
          src="https://lighthouse-tc.com/wp-content/uploads/2020/08/e-learning-header-bg.jpg"
          alt="banner" />
        <div className="writeup">
          <h1 className="banhead">Investing in Knowledge and Your Future</h1>
          <p className="banexp">With the help of e-learning, create your own path and divide on your skills on your own to achieve what you seek</p>
        </div>
      </section>
      <Catalog />
      {/* Catalog section */}
    </>
  );
}

export default Dashboard;
