import React from "react";
import { Link } from "react-router-dom";
import {
  UilHome,
  UilUsersAlt,
  UilFeedback,
  UilFileUpload,
  UilSignout,
  UilEllipsisH,
  UilLock,
  UilUserCheck,
  UilPlus,
} from "@iconscout/react-unicons";

export default function NavPage() {
  return (
    <React.Fragment>
      <div className="background">
        <img
          src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
          alt=""
        />
      </div>
      <div className="title">
        <span>SYB.IT16307_3.B2.2022</span>
        <p className="text-muted">
          <i>
            <UilLock />
          </i>{" "}
          Nhóm riêng tư - <i>31 thành viên</i>
        </p>
      </div>
      <div className="join">
        <button>
          <i>
            <UilUserCheck />
          </i>{" "}
          Đã tham gia
        </button>
        <button>
          <i>
            <UilPlus />
          </i>
          Mời{" "}
        </button>
        <button>
          <i>
            <UilEllipsisH />
          </i>{" "}
        </button>
      </div>
      {/* <!------------------------------- Side bar ----------------------------> */}
      <div className="sidebar">
        <Link to={"/pageDetail"} className="menu-item active">
          <span>
            <i>
              <UilHome />
            </i>
          </span>
          <h3>Trang chủ</h3>
        </Link>
        <Link to={"/pagePeoples"} className="menu-item">
          <span>
            <i>
              <UilUsersAlt />
            </i>
          </span>
          <h3>Thành viên</h3>
        </Link>
        <Link to={"/feedback"} className="menu-item">
          <span>
            <i>
              <UilFeedback />
            </i>
          </span>
          <h3>Phản hồi</h3>
        </Link>
        <Link to={"/pageQuizs"} className="menu-item">
          <span>
            <i>
              <UilFileUpload />
            </i>
          </span>
          <h3>Bài tập (Quiz)</h3>
        </Link>
        <Link to={"/page"} className="menu-item">
          <span>
            <i>
              <UilSignout />
            </i>
          </span>
          <h3>Rời nhóm</h3>
        </Link>
      </div>
    </React.Fragment>
  );
}
