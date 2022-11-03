import React from "react";
import { UilSearch, UilStar, UilEllipsisV } from "@iconscout/react-unicons";
import Nav from "../../general/Nav/index";

import avatar from "../../../../assets/images/1.jpg";
import NavPage from "../../general/NavPage";

export default function PagePeople() {
  return (
    <React.Fragment>
      <Nav />
      <main className="pages">
        <div className="container-page">
          <div className="left">
            <NavPage />
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
