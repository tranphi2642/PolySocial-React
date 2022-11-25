import React from "react";
import NavAdmin from "../../general/NavAdmin/index";
import useLogin from "../../../utils/useLogin/useLogin";

import "./index.scss";
import LineChart from "./LineChart";

export default function Revenus() {
  const { account } = useLogin();

  return (
    <React.Fragment>
      <NavAdmin />
      <section className="dashboard">
        <div className="top">
          <i className="uil uil-bars sidebar-toggle"></i>

          <div className="info">
            <span>{account.fullName}</span>
            <img src={account.avatar} alt="" />
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
