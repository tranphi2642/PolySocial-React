import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UilPlus } from "@iconscout/react-unicons";
import Nav from "../../general/Nav/index";

import avatar from "../../../../assets/images/1.jpg";
import CreateModalQuiz from "./CreateModalQuiz";
import NavPage from "../../general/NavPage";

export default function PageQuiz() {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <Nav />
      <main className="pages">
        <div className="container-page">
          <div className="left">
            <NavPage />
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
              <Link id="createQuiz" onClick={() => setShow(true)}>
                <i>
                  <UilPlus />
                </i>{" "}
                Tạo bài tập (Quiz)
              </Link>
            </div>
          </div>
        </div>
      </main>
      <CreateModalQuiz onClose={() => setShow(false)} show={show} />
    </React.Fragment>
  );
}
