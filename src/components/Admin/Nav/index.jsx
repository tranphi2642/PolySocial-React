import React from "react";
import { Link } from "react-router-dom";
import {
  UilEstate,
  UilChart,
  UilUserPlus,
  UilMoon,
  UilUsersAlt,
  UilFilesLandscapes,
  UilHeartAlt,
  UilComments,
  UilSignout,
} from "@iconscout/react-unicons";

import "./index.scss";

export default function NavAdmin() {
  return (
    <nav className="navbar-admin">
      <div className="logo-name">
        <div className="logo-image">
          <img
            src="https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n-234x375.png"
            alt="PolySoial"
          />
        </div>

        <span className="logo_name">PolySoial</span>
      </div>

      <div className="menu-items">
        <ul className="nav-links">
          <li>
            <Link to={"/admin"} className="menu-item active">
              <i>
                <UilEstate />
              </i>
              <span className="link-name">Trang chủ</span>
            </Link>
          </li>
          <li>
            <Link to={"/admin/revenus"} className="menu-item">
              <i>
                <UilChart />
              </i>
              <span className="link-name">Thống kê</span>
            </Link>
          </li>
          <li>
            <Link to={"/admin/accounts"} className="menu-item">
              <i>
                <UilUserPlus />
              </i>
              <span className="link-name">Tài khoản</span>
            </Link>
          </li>
          <li>
            <Link to={"/admin/groups"} className="menu-item">
              <i>
                <UilUsersAlt />
              </i>
              <span className="link-name">Nhóm</span>
            </Link>
          </li>
          <li>
            <Link to={"/admin/contents"} className="menu-item">
              <i>
                <UilFilesLandscapes />
              </i>
              <span className="link-name">Bài viết</span>
            </Link>
          </li>
          <li>
            <Link to={"/admin/likes"} className="menu-item">
              <i>
                <UilHeartAlt />
              </i>
              <span className="link-name">Yêu thích</span>
            </Link>
          </li>
          <li>
            <Link to={"/admin/comments"} className="menu-item">
              <i>
                <UilComments />
              </i>
              <span className="link-name">Bình luận</span>
            </Link>
          </li>
        </ul>

        <ul className="logout-mode">
          <li>
            <Link to={"/home"}>
              <i>
                <UilSignout />
              </i>
              <span className="link-name">Đăng xuất</span>
            </Link>
          </li>

          <li className="mode">
            <Link>
              <i>
                <UilMoon />
              </i>
              <span className="link-name">Giao diện</span>
            </Link>

            <div className="mode-toggle">
              <span className="switch"></span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
