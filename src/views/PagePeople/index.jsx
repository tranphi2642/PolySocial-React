import React from "react";
import { Link } from "react-router-dom";
import {
  UilHome,
  UilUsersAlt,
  UilFeedback,
  UilFileUpload,
  UilSignout,
  UilSearch,
  UilEllipsisH,
  UilLock,
  UilUserCheck,
  UilPlus,
  UilStar,
  UilEllipsisV,
} from "@iconscout/react-unicons";
import Nav from "../../components/Nav/index";

import avatar from "../../assets/images/1.jpg";

export default function index() {
  return (
    <React.Fragment>
      <Nav />
      <main className="pages">
        <div className="container-page">
          <div className="left">
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
          </div>
          <div className="middle">
            <div className="people">
              <h3>Thành viên</h3>
              <div className="search">
                <input type="text" placeholder="Tìm kiếm thành viên" />
                <button>
                  <i>
                    <UilSearch />
                  </i>
                </button>
              </div>
              <hr />
              <div className="qtv">
                <h3>Quản trị viên</h3>
                <div className="profile">
                  <div className="profile-photo-1">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="handle">
                    <h4>Trần Phi</h4>
                    <p>
                      <i>
                        <UilStar />
                      </i>{" "}
                      Quản trị viên
                    </p>
                  </div>

                  <div className="wrapper">
                    <i>
                      <UilEllipsisV />
                    </i>
                  </div>
                </div>
              </div>
              <div className="all-people">
                <span>Mọi người</span>
                <p className="text-muted">
                  Đây là những người đã tham gia nhóm bạn.
                </p>
                {/* <!------------------------------- profile ----------------------------> */}
                <div className="profile">
                  <div className="profile-photo-1">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="handle">
                    <h4>Trần Phi</h4>
                    <p className="text-muted">Đã tham gia vào tháng trước</p>
                  </div>

                  <div className="wrapper">
                    <i className="uil uil-ellipsis-v"></i>
                  </div>
                </div>
                <div className="profile">
                  <div className="profile-photo-1">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="handle">
                    <h4>Trần Phi</h4>
                    <p className="text-muted">Đã tham gia vào tháng trước</p>
                  </div>

                  <div className="wrapper">
                    <i className="uil uil-ellipsis-v"></i>
                  </div>
                </div>
                <div className="profile">
                  <div className="profile-photo-1">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="handle">
                    <h4>Trần Phi</h4>
                    <p className="text-muted">Đã tham gia vào tháng trước</p>
                  </div>

                  <div className="wrapper">
                    <i className="uil uil-ellipsis-v"></i>
                  </div>
                </div>
                <div className="profile">
                  <div className="profile-photo-1">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="handle">
                    <h4>Trần Phi</h4>
                    <p className="text-muted">Đã tham gia vào tháng trước</p>
                  </div>

                  <div className="wrapper">
                    <i className="uil uil-ellipsis-v"></i>
                  </div>
                </div>
                <div className="profile">
                  <div className="profile-photo-1">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="handle">
                    <h4>Trần Phi</h4>
                    <p className="text-muted">Đã tham gia vào tháng trước</p>
                  </div>

                  <div className="wrapper">
                    <i className="uil uil-ellipsis-v"></i>
                  </div>
                </div>

                <div className="profile">
                  <div className="profile-photo-1">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="handle">
                    <h4>Trần Phi</h4>
                    <p className="text-muted">Đã tham gia vào tháng trước</p>
                  </div>

                  <div className="wrapper">
                    <i className="uil uil-ellipsis-v"></i>
                  </div>
                </div>

                <div className="profile">
                  <div className="profile-photo-1">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="handle">
                    <h4>Trần Phi</h4>
                    <p className="text-muted">Đã tham gia vào tháng trước</p>
                  </div>

                  <div className="wrapper">
                    <i className="uil uil-ellipsis-v"></i>
                  </div>
                </div>

                <div className="profile">
                  <div className="profile-photo-1">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="handle">
                    <h4>Trần Phi</h4>
                    <p className="text-muted">Đã tham gia vào tháng trước</p>
                  </div>

                  <div className="wrapper">
                    <i className="uil uil-ellipsis-v"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!------------------------------- End Middle ----------------------------> */}
        </div>
      </main>
    </React.Fragment>
  );
}
