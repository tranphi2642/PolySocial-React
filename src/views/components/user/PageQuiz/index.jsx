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
import Nav from "../../general/Nav/index";

import avatar from "../../../../assets/images/1.jpg";

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
            <div className="exercise">
              <Link to={"/pageQuizsDetails"} className="profile">
                <div className="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div className="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 1</span>
                  </h4>
                  <p className="text-muted">28/09/2022</p>
                </div>

                <div className="wrapper">
                  <span className="check-quiz">
                    <p>0</p> Chưa nộp
                  </span>
                  <span className="check-quiz">
                    <p>10</p> Đã nộp
                  </span>
                </div>
              </Link>

              <Link to={"/pageQuizsDetails"} className="profile">
                <div className="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div className="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 2</span>
                  </h4>
                  <p className="text-muted">28/09/2022</p>
                </div>
              </Link>

              <Link to={"/pageQuizsDetails"} className="profile">
                <div className="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div className="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 3</span>
                  </h4>
                  <p className="text-muted">28/09/2022</p>
                </div>
              </Link>

              <Link to={"/pageQuizsDetails"} className="profile">
                <div className="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div className="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 4</span>
                  </h4>
                  <p className="text-muted">28/09/2022</p>
                </div>
              </Link>

              <Link to={"/pageQuizsDetails"} className="profile">
                <div className="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div className="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 5</span>
                  </h4>
                  <p className="text-muted">28/09/2022</p>
                </div>
              </Link>

              <Link to={"/pageQuizsDetails"} className="profile">
                <div className="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div className="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 6</span>
                  </h4>
                  <p className="text-muted">28/09/2022</p>
                </div>
              </Link>

              <Link to={"/pageQuizsDetails"} className="profile">
                <div className="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div className="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 7</span>
                  </h4>
                  <p className="text-muted">28/09/2022</p>
                </div>
              </Link>

              <Link to={"/pageQuizsDetails"} className="profile">
                <div className="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div className="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 8</span>
                  </h4>
                  <p className="text-muted">28/09/2022</p>
                </div>
              </Link>
            </div>
          </div>
          {/* <!------------------------------- End Middle ----------------------------> */}
          <div className="right">
            <div className="about">
              <div className="intro">
                <h3>Giới thiệu</h3>
                <p>Chào mừng các bạn đã đến với lớp học.</p>
              </div>

              <div className="intro">
                <h3>Hướng dẫn</h3>
                <p>Bước 1: Nhấp vào các bài tập bên phía tay phải.</p>
                <p>Bước 2: Chọn tệp muốn nộp.</p>
                <p>Bước 3: Nhấp tải tệp.</p>
              </div>

              <button>Tìm hiểu thêm</button>
            </div>
            <div className="create-quiz">
              <Link id="createQuiz">
                <i>
                  <UilPlus />
                </i>{" "}
                Tạo bài tập (Quiz)
              </Link>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
