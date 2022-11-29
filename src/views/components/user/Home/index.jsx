import React, { useRef, useEffect, useState } from "react";
import useLogin from "../../../utils/useLogin/useLogin";
import { Link, Navigate } from "react-router-dom";
import NotificationModal from "./NotificationModal";
import NotificationDelineModal from "./NotificationDelineModal";
import CreatePostModal from "./CreatePostModal";
import CustomModal from "./CustomModal";
import Nav from "../../general/Nav/index";
import Post from "../../general/Post";
import Asios from "./../../../../api/index";

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
import ListFiend from "../../general/ListFriend";
import { io } from "socket.io-client";

const CONNECTTION_PORT = "localhost:3002";
let socket;
export default function Home() {
  const { account } = useLogin();
  const [show, setShow] = useState(false);
  const [showDeadline, setShowDeadline] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showRequestFriend, setShowRequestFriend] = useState([]);
  const [listPosts, setListPost] = useState([]);

  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [lastList, setLastList] = useState(false);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getRequestFriend();
  }, []);

  useEffect(() => {
    socket = io(CONNECTTION_PORT);
  });

  useEffect(() => {
    socket.on("Server-response-like-comment", async function () {
      const response = await Asios.Posts.getAllByAllPost(0, 100);
      setListPost([...listPosts, ...response.listPostDTO]);
    });
  },[]);

  const fetchData = async () => {
    const response = await Asios.Posts.getAllByAllPost(currPage, limit);
    console.log("currPage----> " + currPage);
    if (!response.listPostDTO.length) {
      setLastList(true);
      return;
    }
    setPrevPage(currPage);
    setListPost([...listPosts, ...response.listPostDTO]);
  };
  if (!lastList && prevPage !== currPage) {
    fetchData();
  }

  const getRequestFriend = async () => {
    const response = await Asios.Friends.getAllRequestAddFriend();
    setShowRequestFriend(response);
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

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
              <Link className="menu-item" onClick={logout}>
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
            </form>
            {/* <!------------------------------- End Create post ----------------------------> */}

            {/* <!------------------------------- Feeds ----------------------------> */}
            <div className="feeds">
              {listPosts.map((post, index) => (
                <Post {...post} key={index} socket={socket} />
              ))}
              <div>
                <div
                  onScroll={onScroll}
                  ref={listInnerRef}
                  style={{ height: "100vh", overflowY: "auto" }}
                >
                  {listPosts.map((post, index) => (
                    <Post {...post} key={index} socket={socket} />
                  ))}
                </div>
              </div>
            </div>
            {/* <!------------------------------- End Feeds ----------------------------> */}
          </div>
          {/* <!------------------------------- End Middle ----------------------------> */}

          {/* <!------------------------------- Right ----------------------------> */}
          <div className="right">
            <div className="messages">
              <ListFiend socket={socket} />
            </div>
            {/* <!------------------------------- End Messages ----------------------------> */}

            {/* <!------------------------------- Friend Requests ----------------------------> */}
            <div className="friend-requests">
              <h4>Lời kết bạn</h4>
              {showRequestFriend.map((addFriend, index) => (
                <AddFriend {...addFriend} key={index} />
              ))}
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
        socket={socket}
      />
    </React.Fragment>
  );
}
