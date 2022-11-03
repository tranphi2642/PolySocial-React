import React, { useState } from "react";
import useLogin from "../../../utils/useLogin/useLogin";
import { Link, Navigate } from "react-router-dom";
import NotificationModal from "./NotificationModal";
import NotificationDelineModal from "./NotificationDelineModal";
import CreatePostModal from "./CreatePostModal";
import CustomModal from "./CustomModal";
import Nav from "../../general/Nav/index";
import Post from "../../general/Post";

import {
  UilHome,
  UilBell,
  UilUsersAlt,
  UilEnvelopeAlt,
  UilPalette,
  UilClockTwo,
  UilShield,
  UilSignout,
} from "@iconscout/react-unicons";

import "./index.scss";
import AddFriend from "../../general/ConfirmFriend";
import ChatSmall from "../../general/ChatSmall";

export default function Home() {
  const { account } = useLogin();
  const [show, setShow] = useState(false);
  const [showDeadline, setShowDeadline] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);

  if (!account) {
    return <Navigate to="/login" replace={true} />;
  }
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
                <img src={account.avatar} alt="" />
              </div>
              <div className="handle">
                <h4>{account.fullName}</h4>
                <p className="text-muted">{account.email}</p>
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
              <Link
                className="menu-item"
                id="notifications"
                onClick={() => setShow(true)}
              >
                <span>
                  <i>
                    <UilBell />
                    <small className="notification-count">4</small>
                  </i>
                </span>
                <h3>Thông báo</h3>
                <NotificationModal onClose={() => setShow(false)} show={show} />
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
              <Link
                className="menu-item"
                id="theme"
                onClick={() => setShowCustom(true)}
              >
                <span>
                  <i>
                    <UilPalette />
                  </i>
                </span>
                <h3>Giao diện</h3>
              </Link>
              <Link
                className="menu-item"
                id="notifications-deline"
                onClick={() => setShowDeadline(true)}
              >
                <span>
                  <i>
                    <UilClockTwo />
                    <small className="notification-count">5</small>
                  </i>
                </span>
                <h3>Bài tập (Deadline)</h3>

                <NotificationDelineModal
                  onClose={() => setShowDeadline(false)}
                  showDeline={showDeadline}
                />
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
              <div className="profile-photo-post">
                <img src={account.avatar} alt="" />
              </div>
              <input
                type="text"
                id="create-post"
                placeholder="Hôm nay bạn muốn đăng gì thế?"
                onClick={() => setShowCreatePost(true)}
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
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
            {/* <!------------------------------- End Feeds ----------------------------> */}
          </div>
          {/* <!------------------------------- End Middle ----------------------------> */}

          {/* <!------------------------------- Right ----------------------------> */}
          <div className="right">
            <div className="messages">
              <div className="heading">
                <h4>Nhắn tin</h4> <i className="uil uil-edit"></i>
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
              {/* <!------------------------------- Messages ----------------------------> */}
              <div className="all-messages">
                <ChatSmall />
                <ChatSmall />
                <ChatSmall />
                <ChatSmall />
                <ChatSmall />
                <ChatSmall />
                <ChatSmall />
                <ChatSmall />
                <ChatSmall />
              </div>
            </div>
            {/* <!------------------------------- End Messages ----------------------------> */}

            {/* <!------------------------------- Friend Requests ----------------------------> */}
            <div className="friend-requests">
              <h4>Lời kết bạn</h4>
              <AddFriend />
              <AddFriend />
              <AddFriend />
            </div>
            {/* <!------------------------------- End Friend Request ----------------------------> */}
          </div>
          {/* <!------------------------------- End Right ----------------------------> */}
        </div>
      </main>
      <CustomModal
        onClose={() => setShowCustom(false)}
        showCustom={showCustom}
      />
      <CreatePostModal
        onClose={() => setShowCreatePost(false)}
        showCreatePost={showCreatePost}
      />
    </React.Fragment>
  );
}