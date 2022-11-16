import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Asios from "./../../../../api/index";
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

import CreateModalQuiz from "./CreateModalQuiz";
import Quiz from "../../general/Quiz";

export default function PageQuiz() {
  const [show, setShow] = useState(false);
  const [group, setGroup] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const response = await Asios.Groups.get_one_group(id);
    setGroup(response);
  };

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
              <span>{group.name}</span>
              <p className="text-muted">
                <i>
                  <UilLock />
                </i>{" "}
                Nhóm riêng tư - <i>{group.totalMember} thành viên</i>
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
              <Link
                to={`/pageDetail/${group.groupId}`}
                className="menu-item active"
              >
                <span>
                  <i>
                    <UilHome />
                  </i>
                </span>
                <h3>Trang chủ</h3>
              </Link>
              <Link to={`/pagePeoples/${group.groupId}`} className="menu-item">
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
              <Link to={`/pageQuizs/${group.groupId}`} className="menu-item">
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
                <Quiz />
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
