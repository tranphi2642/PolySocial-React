import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchFriend from "./SearchFriend";
import avatar from "../../../../assets/images/1.jpg";
import "./index.scss";
import { UilSearch } from "@iconscout/react-unicons";
import useLogin from "../../../utils/useLogin/useLogin";

export default function Nav() {
  const {account} = useLogin();
  const [show, setShow] = useState(false);

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
          <input
            type="search"
            placeholder="Tìm kiếm"
            onClick={() => setShow(true)}
          />
          <SearchFriend onClose={() => setShow(false)} show={show} />
        </div>
        <div className="profile-picture">
          <span>{account.fullName}</span>
          <img src={account.avatar} alt="" />
        </div>
      </div>
    </nav>
  );
}
