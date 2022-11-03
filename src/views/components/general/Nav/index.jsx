import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchFriend from "./SearchFriend";
import "./index.scss";
import {
  UilSearch,
  UilSignout,
  UilUser,
  UilLock,
} from "@iconscout/react-unicons";
import useLogin from "../../../utils/useLogin/useLogin";

export default function Nav() {
  const { account } = useLogin();
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
        <div className="dropdown">
          <div className="profile-picture">
            <span>{account.fullName}</span>
            <img src={account.avatar} alt="" />
          </div>
          <div className="dropdown-content">
            <p className="text-muted">Sinh viên FPT</p>
            <Link to={"/profile"}>
              <i>
                <UilUser />
              </i>
              Thông tin
            </Link>
            <Link to={"/changePass"}>
              <i>
                <UilLock />
              </i>
              Đổi mật khẩu
            </Link>
            <Link to={"/logout"}>
              <i>
                <UilSignout />
              </i>
              Đăng xuất
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
