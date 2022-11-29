import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Asios from "./../../../../api/index";
import Post from "../../general/Post";
import useLogin from "../../../utils/useLogin/useLogin";
import CreatePostModal from "./CreatePostModal";
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
  UilEnvelopeAlt,
} from "@iconscout/react-unicons";
import Nav from "../../general/Nav/index";
import { useLocation } from "react-router-dom";

import { io } from "socket.io-client";

let socket;
const CONNECTTION_PORT = "localhost:3002";

export default function PageDetail() {
  const { account } = useLogin();
  const location = useLocation();
  const { from } = location.state;
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [group, setGroup] = useState([]);
  const [listPosts, setListPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAllData();
    fetchPostList();
  }, []);

  useEffect(() => {
    socket = io(CONNECTTION_PORT);
  });

  const fetchPostList = async () => {
    try {
      const response = await Asios.Posts.getAllByAllPostGroup(id);
      setListPost(response.listPostDTO);
    } catch (error) {
      console.log("Failed to fetch post list: ", error);
    }
  };

  const getAllData = async () => {
    const response = await Asios.Groups.getOneGroup(id);
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
              <button type="button">
                <i>
                  <UilUserCheck />
                </i>{" "}
                Đã tham gia
              </button>
              <button type="button">
                <i>
                  <UilPlus />
                </i>
                Mời{" "}
              </button>
              <button type="button">
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
              <Link
                to={`/messages`}
                state={{ from: from }}
                className="menu-item"
              >
                <span>
                  <i>
                    <UilEnvelopeAlt />
                  </i>
                </span>
                <h3>Nhắn tin</h3>
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
                <Post {...post} key={index} />
              ))}
            </div>
            {/* <!------------------------------- End Feeds ----------------------------> */}
          </div>
        </div>
      </main>
      <CreatePostModal
        onClose={() => setShowCreatePost(false)}
        showCreatePost={showCreatePost}
        socket={socket}
      />
    </React.Fragment>
  );
}
