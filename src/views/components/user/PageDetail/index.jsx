import React from "react";
import { Link } from "react-router-dom";
import {
  UilHome,
  UilUsersAlt,
  UilFeedback,
  UilFileUpload,
  UilSignout,
  UilHeart,
  UilCommentDots,
  UilShareAlt,
  UilBookmarkFull,
  UilEllipsisH,
  UilLock,
  UilUserCheck,
  UilPlus,
} from "@iconscout/react-unicons";
import Nav from "../../general/Nav/index";

import avatar from "../../../../assets/images/1.jpg";
import post from "../../../../assets/images/post.jpg";

export default function pageDetail() {
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
            {/* <!------------------------------- Create post ----------------------------> */}
            <form className="create-post">
              <div className="profile-photo">
                <img src={avatar} alt="" />
              </div>
              <input
                type="text"
                name="post"
                id="create-post"
                placeholder="Hôm nay bạn muốn đăng gì thế?"
              />
              <input
                type="submit"
                value="Đăng bài"
                className="btn btn-primary"
              />
            </form>
            {/* <!------------------------------- End Create post ----------------------------> */}

            {/* <!------------------------------- Feeds ----------------------------> */}
            <div className="feeds">
              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="info">
                      <h3>Trần Phi</h3>
                      <small> FPT Polytechnic, 15 phút trước </small>
                    </div>
                  </div>
                  <span className="edit">
                    <i>
                      <UilEllipsisH />
                    </i>
                  </span>
                </div>

                <div className="photo">
                  <img src={post} alt="" />
                </div>

                <div className="action-buttons">
                  <div className="interaction-buttons">
                    <span>
                      <i>
                        <UilHeart />
                      </i>
                      <i>
                        <UilCommentDots />
                      </i>
                      <i className="uil uil-share-alt">
                        <UilShareAlt />
                      </i>
                    </span>
                  </div>
                  <div className="bookmark">
                    <span>
                      <i>
                        <UilBookmarkFull />
                      </i>
                    </span>
                  </div>
                </div>

                <div className="liked-by">
                  <span>
                    <img src={avatar} alt="" />
                  </span>
                  <span>
                    <img src={avatar} alt="" />
                  </span>
                  <span>
                    <img src={avatar} alt="" />
                  </span>

                  <p>
                    Được thích bởi <b>Trần Phi</b> và <b> 4 người khác</b>{" "}
                  </p>
                </div>

                <div className="caption">
                  <p>
                    <b>Trần Phi</b> Gia đình Coder Poly. <span>#Fpoly</span>
                  </p>
                </div>

                <div className="comments text-muted">
                  Xem tất cả các bình luận
                </div>
              </div>

              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="info">
                      <h3>Trần Phi</h3>
                      <small> FPT Polytechnic, 15 phút trước </small>
                    </div>
                  </div>
                  <span className="edit">
                    <i>
                      <UilEllipsisH />
                    </i>
                  </span>
                </div>

                <div className="photo">
                  <img src={post} alt="" />
                </div>

                <div className="action-buttons">
                  <div className="interaction-buttons">
                    <span>
                      <i>
                        <UilHeart />
                      </i>
                      <i>
                        <UilCommentDots />
                      </i>
                      <i className="uil uil-share-alt">
                        <UilShareAlt />
                      </i>
                    </span>
                  </div>
                  <div className="bookmark">
                    <span>
                      <i>
                        <UilBookmarkFull />
                      </i>
                    </span>
                  </div>
                </div>

                <div className="liked-by">
                  <span>
                    <img src={avatar} alt="" />
                  </span>
                  <span>
                    <img src={avatar} alt="" />
                  </span>
                  <span>
                    <img src={avatar} alt="" />
                  </span>

                  <p>
                    Được thích bởi <b>Trần Phi</b> và <b> 4 người khác</b>{" "}
                  </p>
                </div>

                <div className="caption">
                  <p>
                    <b>Trần Phi</b> Gia đình Coder Poly. <span>#Fpoly</span>
                  </p>
                </div>

                <div className="comments text-muted">
                  Xem tất cả các bình luận
                </div>
              </div>

              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="info">
                      <h3>Trần Phi</h3>
                      <small> FPT Polytechnic, 15 phút trước </small>
                    </div>
                  </div>
                  <span className="edit">
                    <i>
                      <UilEllipsisH />
                    </i>
                  </span>
                </div>

                <div className="photo">
                  <img src={post} alt="" />
                </div>

                <div className="action-buttons">
                  <div className="interaction-buttons">
                    <span>
                      <i>
                        <UilHeart />
                      </i>
                      <i>
                        <UilCommentDots />
                      </i>
                      <i className="uil uil-share-alt">
                        <UilShareAlt />
                      </i>
                    </span>
                  </div>
                  <div className="bookmark">
                    <span>
                      <i>
                        <UilBookmarkFull />
                      </i>
                    </span>
                  </div>
                </div>

                <div className="liked-by">
                  <span>
                    <img src={avatar} alt="" />
                  </span>
                  <span>
                    <img src={avatar} alt="" />
                  </span>
                  <span>
                    <img src={avatar} alt="" />
                  </span>

                  <p>
                    Được thích bởi <b>Trần Phi</b> và <b> 4 người khác</b>{" "}
                  </p>
                </div>

                <div className="caption">
                  <p>
                    <b>Trần Phi</b> Gia đình Coder Poly. <span>#Fpoly</span>
                  </p>
                </div>

                <div className="comments text-muted">
                  Xem tất cả các bình luận
                </div>
              </div>

              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="info">
                      <h3>Trần Phi</h3>
                      <small> FPT Polytechnic, 15 phút trước </small>
                    </div>
                  </div>
                  <span className="edit">
                    <i>
                      <UilEllipsisH />
                    </i>
                  </span>
                </div>

                <div className="photo">
                  <img src={post} alt="" />
                </div>

                <div className="action-buttons">
                  <div className="interaction-buttons">
                    <span>
                      <i>
                        <UilHeart />
                      </i>
                      <i>
                        <UilCommentDots />
                      </i>
                      <i className="uil uil-share-alt">
                        <UilShareAlt />
                      </i>
                    </span>
                  </div>
                  <div className="bookmark">
                    <span>
                      <i>
                        <UilBookmarkFull />
                      </i>
                    </span>
                  </div>
                </div>

                <div className="liked-by">
                  <span>
                    <img src={avatar} alt="" />
                  </span>
                  <span>
                    <img src={avatar} alt="" />
                  </span>
                  <span>
                    <img src={avatar} alt="" />
                  </span>

                  <p>
                    Được thích bởi <b>Trần Phi</b> và <b> 4 người khác</b>{" "}
                  </p>
                </div>

                <div className="caption">
                  <p>
                    <b>Trần Phi</b> Gia đình Coder Poly. <span>#Fpoly</span>
                  </p>
                </div>

                <div className="comments text-muted">
                  Xem tất cả các bình luận
                </div>
              </div>
            </div>
            {/* <!------------------------------- End Feeds ----------------------------> */}
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
