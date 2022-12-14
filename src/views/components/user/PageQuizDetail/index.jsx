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
  UilExport,
} from "@iconscout/react-unicons";
import Nav from "../../general/Nav/index";

import avatar from "../../../../assets/images/1.jpg";

export default function PageQuizDetail() {
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
            <div class="exercise">
              <div class="profile">
                <div class="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div class="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 1</span>
                  </h4>
                  <p class="text-muted">28/09/2022</p>
                </div>

                <div class="wrapper">
                  <span>Chưa nộp</span>
                  <div class="file-upload">
                    <input type="file" />
                    <i>
                      <UilExport />
                    </i>
                  </div>
                </div>
              </div>

              <div class="profile">
                <div class="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div class="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 2</span>
                  </h4>
                  <p class="text-muted">28/09/2022</p>
                </div>

                <div class="wrapper">
                  <span>Chưa nộp</span>
                  <div class="file-upload">
                    <input type="file" />
                    <i>
                      <UilExport />
                    </i>
                  </div>
                </div>
              </div>

              <div class="profile">
                <div class="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div class="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 3</span>
                  </h4>
                  <p class="text-muted">28/09/2022</p>
                </div>

                <div class="wrapper">
                  <span>Chưa nộp</span>
                  <div class="file-upload">
                    <input type="file" />
                    <i>
                      <UilExport />
                    </i>
                  </div>
                </div>
              </div>

              <div class="profile">
                <div class="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div class="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 4</span>
                  </h4>
                  <p class="text-muted">28/09/2022</p>
                </div>

                <div class="wrapper">
                  <span>Chưa nộp</span>
                  <div class="file-upload">
                    <input type="file" />
                    <i>
                      <UilExport />
                    </i>
                  </div>
                </div>
              </div>

              <div class="profile">
                <div class="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div class="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 5</span>
                  </h4>
                  <p class="text-muted">28/09/2022</p>
                </div>

                <div class="wrapper">
                  <span>Chưa nộp</span>
                  <div class="file-upload">
                    <input type="file" />
                    <i>
                      <UilExport />
                    </i>
                  </div>
                </div>
              </div>

              <div class="profile">
                <div class="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div class="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 6</span>
                  </h4>
                  <p class="text-muted">28/09/2022</p>
                </div>

                <div class="wrapper">
                  <span>Chưa nộp</span>
                  <div class="file-upload">
                    <input type="file" />
                    <i>
                      <UilExport />
                    </i>
                  </div>
                </div>
              </div>

              <div class="profile">
                <div class="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div class="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 7</span>
                  </h4>
                  <p class="text-muted">28/09/2022</p>
                </div>

                <div class="wrapper">
                  <span>Chưa nộp</span>
                  <div class="file-upload">
                    <input type="file" />
                    <i>
                      <UilExport />
                    </i>
                  </div>
                </div>
              </div>

              <div class="profile">
                <div class="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div class="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Lab 8</span>
                  </h4>
                  <p class="text-muted">28/09/2022</p>
                </div>

                <div class="wrapper">
                  <span>Chưa nộp</span>
                  <div class="file-upload">
                    <input type="file" />
                    <i>
                      <UilExport />
                    </i>
                  </div>
                </div>
              </div>

              <div class="profile">
                <div class="profile-photo-1">
                  <img src={avatar} alt="" />
                </div>
                <div class="handle">
                  <h4>
                    Trần Phi<span> đã tạo mới một bài tập: Assignment GD1</span>
                  </h4>
                  <p class="text-muted">28/09/2022</p>
                </div>

                <div class="wrapper">
                  <span>Chưa nộp</span>
                  <div class="file-upload">
                    <input type="file" />
                    <i>
                      <UilExport />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!------------------------------- End Middle ----------------------------> */}
          {/* <div className="right">
            <div className="about">
                <h3>Giới thiệu</h3>
                <span><i className="uil uil-lock"></i> Riêng tư</span>
                <p>Chỉ thành viên mới nhìn thấy mọi người trong nhóm và những gì họ đăng.</p>

                <span><i className="uil uil-eye"></i> Hiển thị</span>
                <p>Ai cũng có thể tìm nhóm này.</p>

                <button>Tìm hiểu thêm</button>
            </div>
        </div>  */}
        </div>
      </main>
    </React.Fragment>
  );
}
