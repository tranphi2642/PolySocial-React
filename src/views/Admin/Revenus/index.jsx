import React from "react";
import NavAdmin from "../../../components/Admin/Nav/index";

import avatar from "../../../assets/images/1.jpg";
import "./index.scss";
import LineChart from "./LineChart";

export default function Revenus() {
  return (
    <React.Fragment>
      <NavAdmin />
      <section className="dashboard">
        <div className="top">
          <i className="uil uil-bars sidebar-toggle"></i>

          <div className="info">
            <span>Trần Phi</span>
            <img src={avatar} alt="" />
          </div>
        </div>

        <div className="dash-content">
          <div className="chart-container">
            <div className="title">Thống kê</div>
            <LineChart />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
