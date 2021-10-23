import React from "react";
import "../assets/css/pages/Dashboard/dashboard.css";
import Catalog from "../components/Catalog";

function Dashboard() {
  return (
    <>
      <section className="d-block w-100">
        <img
          className="banner"
          src="https://lighthouse-tc.com/wp-content/uploads/2020/08/e-learning-header-bg.jpg"
          alt="banner"
        />
      </section>
      <Catalog />
      {/* Catalog section */}
    </>
  );
}

export default Dashboard;
