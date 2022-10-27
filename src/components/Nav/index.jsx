import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/1.jpg";
import "./index.scss";
import { UilSearch } from "@iconscout/react-unicons";

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to={"/home"}>
            <img
              src="https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n-234x375.png"
              alt="PolySoial"
            />
            <span> PolySocial</span>
          </Link>
        </div>
        <div className="search-bar">
          <i>
            <UilSearch />
          </i>
          <input type="search" placeholder="Tìm kiếm" />
        </div>
        <div className="profile-picture">
          <span>Trần Phi</span>
          <img src={avatar} alt="" />
        </div>
      </div>
    </nav>
  );
}
