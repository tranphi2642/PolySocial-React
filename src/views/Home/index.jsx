import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/index";

import {
  UilHome,
  UilBell,
  UilUsersAlt,
  UilEnvelopeAlt,
  UilPalette,
  UilClockTwo,
  UilShield,
  UilSignout,
  UilHeart,
  UilCommentDots,
  UilShareAlt,
  UilBookmarkFull,
  UilEllipsisH,
} from "@iconscout/react-unicons";

import avatar from "../../assets/images/1.jpg";
import post from "../../assets/images/post.jpg";
import "./index.scss";

export default function Home() {
  return (
    <React.Fragment>
      <Nav />
      {/* <!------------------------------- Main ----------------------------> */}
      <main>
        <div className="container">
          {/* <!------------------------------- Left ----------------------------> */}
          <div className="left">
            <Link to={"/profile"} className="profile">
              <div className="profile-photo">
                <img src={avatar} alt="" />
              </div>
              <div className="handle">
                <h4>Trần Phi</h4>
                <p className="text-muted">@pi2642</p>
              </div>
            </Link>

            {/* <!------------------------------- Side bar ----------------------------> */}
            <div className="sidebar">
              <Link className="menu-item active">
                <span>
                  <i>
                    <UilHome />
                  </i>
                </span>
                <h3>Trang chủ</h3>
              </Link>
              <Link className="menu-item" id="notifications">
                <span>
                  <i>
                    <UilBell />
                    <small className="notification-count">4</small>
                  </i>
                </span>
                <h3>Thông báo</h3>
                <div className="notifications-popup">
                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/page"} className="menu-item">
                <span>
                  <i>
                    <UilUsersAlt />
                    <small className="notification-count">2</small>
                  </i>
                </span>
                <h3>Nhóm</h3>
              </Link>
              <Link
                to={"/messages"}
                className="menu-item"
                id="messages-notifacations"
              >
                <span>
                  <i>
                    <UilEnvelopeAlt />
                    <small className="notification-count">5</small>
                  </i>
                </span>
                <h3>Tin nhắn</h3>
              </Link>
              <Link className="menu-item" id="theme">
                <span>
                  <i>
                    <UilPalette />
                  </i>
                </span>
                <h3>Giao diện</h3>
              </Link>
              <Link className="menu-item" id="notifications-deline">
                <span>
                  <i>
                    <UilClockTwo />
                    <small className="notification-count">5</small>
                  </i>
                </span>
                <h3>Bài tập (Deadline)</h3>

                {/* <!------------------------------- Notification deline ----------------------------> */}
                <div className="notifications-deline">
                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
                      <small className="text-muted">1 phút trước</small>
                    </div>
                  </div>
                </div>
                {/* <!------------------------------- End Notification deline ----------------------------> */}
              </Link>
              <Link to={"/admin"} className="menu-item">
                <span>
                  <i>
                    <UilShield />
                  </i>
                </span>
                <h3>Quản lý</h3>
              </Link>
              <Link to={"/"} className="menu-item">
                <span>
                  <i>
                    <UilSignout />
                  </i>
                </span>
                <h3>Đăng xuất</h3>
              </Link>
            </div>
            {/* <!------------------------------- End Sidebar ----------------------------> */}
            {/* <!-- <button className="btn btn-primary">Đăng xuất</button> --> */}
          </div>
          {/* <!------------------------------- Middle ----------------------------> */}
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

                <div className="cmt">
                  <form className="create-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <input
                      type="text"
                      name="post"
                      id="create-cmt"
                      placeholder="Viết bình luận..."
                    />
                  </form>
                </div>

                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>
                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>

                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>
                <div className="all-comments text-muted">
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

                <div className="cmt">
                  <form className="create-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <input
                      type="text"
                      name="post"
                      id="create-cmt"
                      placeholder="Viết bình luận..."
                    />
                  </form>
                </div>

                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>
                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>

                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>
                <div className="all-comments text-muted">
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

                <div className="cmt">
                  <form className="create-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <input
                      type="text"
                      name="post"
                      id="create-cmt"
                      placeholder="Viết bình luận..."
                    />
                  </form>
                </div>

                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>
                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>

                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>
                <div className="all-comments text-muted">
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

                <div className="cmt">
                  <form className="create-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <input
                      type="text"
                      name="post"
                      id="create-cmt"
                      placeholder="Viết bình luận..."
                    />
                  </form>
                </div>

                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>
                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>

                <div className="comments">
                  <div className="profile-cmt">
                    <div className="profile-photo-cmt">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="handle-cmt">
                      <h4>Trần Phi</h4>
                      <p>Bài viết này xịn quá</p>
                    </div>
                  </div>
                </div>
                <div className="all-comments text-muted">
                  Xem tất cả các bình luận
                </div>
              </div>
            </div>
            {/* <!------------------------------- End Feeds ----------------------------> */}
          </div>
          {/* <!------------------------------- End Middle ----------------------------> */}

          {/* <!------------------------------- Right ----------------------------> */}
          <div className="right">
            <div className="messages">
              <div className="heading">
                <h4>Messages</h4> <i className="uil uil-edit"></i>
              </div>
              {/* <!------------------------------- Search bar ----------------------------> */}
              <div className="search-bar">
                <i className="uil uil-search"></i>
                <input
                  type="search"
                  id="search-bar"
                  placeholder="Tìm kiếm tin nhắn"
                />
              </div>
              {/* <!------------------------------- Messages Category ----------------------------> */}
              <div className="category">
                <h6 className="active">Tin nhắn</h6>
                <h6 className="message-requests">Lời kết bạn (7)</h6>
              </div>
              {/* <!------------------------------- Messages ----------------------------> */}
              <div className="all-messages">
                <div className="message">
                  <div className="profile-photo">
                    <img src={avatar} alt="" />
                  </div>

                  <div className="message-body">
                    <h5>Trần Phi</h5>
                    <p className="text-muted">Xin chào</p>
                  </div>
                </div>

                <div className="message">
                  <div className="profile-photo">
                    <img src={avatar} alt="" />
                  </div>

                  <div className="message-body">
                    <h5>Nguyễn Thăng</h5>
                    <p className="text-muted">Xin chào</p>
                  </div>
                </div>

                <div className="message">
                  <div className="profile-photo">
                    <img src={avatar} alt="" />
                  </div>

                  <div className="message-body">
                    <h5>Trần Phi</h5>
                    <p className="text-muted">Xin chào</p>
                  </div>
                </div>

                <div className="message">
                  <div className="profile-photo">
                    <img src={avatar} alt="" />
                  </div>

                  <div className="message-body">
                    <h5>Đặng Hoàng Duy</h5>
                    <p className="text-muted">Xin chào</p>
                  </div>
                </div>

                <div className="message">
                  <div className="profile-photo">
                    <img src={avatar} alt="" />
                  </div>

                  <div className="message-body">
                    <h5>Phan Nguyễn Đăng Trường</h5>
                    <p className="text-muted">Xin chào</p>
                  </div>
                </div>

                <div className="message">
                  <div className="profile-photo">
                    <img src={avatar} alt="" />
                    <div className="active"></div>
                  </div>

                  <div className="message-body">
                    <h5>Trần Phi</h5>
                    <p className="text-muted">Xin chào</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!------------------------------- End Messages ----------------------------> */}

            {/* <!------------------------------- Friend Requests ----------------------------> */}
            <div className="friend-requests">
              <h4>Lời kết bạn</h4>
              <div className="request">
                <div className="info">
                  <div className="profile-photo">
                    <img src={avatar} alt="" />
                  </div>
                  <div>
                    <h5>Nguyễn Thăng</h5>
                    <p className="text-muted">2 bạn chung</p>
                  </div>
                </div>

                <div className="action">
                  <button className="btn btn-primary">Xác nhận</button>
                  <button className="btn">Huỷ</button>
                </div>
              </div>

              <div className="request">
                <div className="info">
                  <div className="profile-photo">
                    <img src={avatar} alt="" />
                  </div>
                  <div>
                    <h5>Phan Nguyễn Đăng Trường</h5>
                    <p className="text-muted">2 bạn chung</p>
                  </div>
                </div>

                <div className="action">
                  <button className="btn btn-primary">Xác nhận</button>
                  <button className="btn">Huỷ</button>
                </div>
              </div>

              <div className="request">
                <div className="info">
                  <div className="profile-photo">
                    <img src={avatar} alt="" />
                  </div>
                  <div>
                    <h5>Đặng Hoàng Duy</h5>
                    <p className="text-muted">2 bạn chung</p>
                  </div>
                </div>

                <div className="action">
                  <button className="btn btn-primary">Xác nhận</button>
                  <button className="btn">Huỷ</button>
                </div>
              </div>
            </div>
            {/* <!------------------------------- End Friend Request ----------------------------> */}
          </div>
          {/* <!------------------------------- End Right ----------------------------> */}
        </div>
      </main>

      {/* <!------------------------------- Theme custom ----------------------------> */}
      {/* <div className="customize-theme">
        <div className="card">
          <h2>Giao điện custom</h2>
          <p className="text-muted">
            Quản lý cỡ chữ, màu sắc và màu nền tuỳ theo ý của bạn
          </p>

          <div className="font-size">
            <h4>Cỡ chữ</h4>
            <div>
              <h6>Aa</h6>
              <div className="choose-size">
                <span className="font-size-1"></span>
                <span className="font-size-2"></span>
                <span className="font-size-3 active"></span>
                <span className="font-size-4"></span>
                <span className="font-size-5"></span>
              </div>
              <h3>Aa</h3>
            </div>
          </div>

          <div className="color">
            <h4>Màu sắc</h4>
            <div className="choose-color">
              <span className="color-1"></span>
              <span className="color-2"></span>
              <span className="color-3 active"></span>
              <span className="color-4"></span>
              <span className="color-5"></span>
            </div>
          </div>

          <div className="background">
            <h4>Màu nền</h4>
            <div className="choose-bg">
              <div className="bg-1 active">
                <span></span>
                <h5 for="bg-1">Trắng</h5>
              </div>

              <div className="bg-2">
                <span></span>
                <h5 for="bg-2">Sầm</h5>
              </div>

              <div className="bg-3">
                <span></span>
                <h5 for="bg-3">Đêm</h5>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
}
