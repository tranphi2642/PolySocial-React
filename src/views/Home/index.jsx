import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotificationModal from "./NotificationModal";
import NotificationDelineModal from "./NotificationDelineModal";
import CreatePostModal from "./CreatePostModal";
import CustomModal from "./CustomModal";
import Nav from "../../components/Nav/index";
import { format } from 'date-fns'
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
import { useEffect } from "react";
import PostApi from "../../api/User/PostApi";

export default function Home() {
  const [show, setShow] = useState(false);//
  const [showDeline, setShowDeline] = useState(false);//
  const [showCustom, setShowCustom] = useState(false);//
  const [showCreatePost, setShowCreatePost] = useState(false);//
  const [listPosts, setListPost] = useState([]);
  // const [itemInputPost, setItemInputPost] = useState('');
  // const [alert, setAlert] = useState(false);
  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await PostApi.getAllByAllPost();
        setListPost(response.listPostDTO);
        // console.log("-->", response);
      } catch (error) {
        console.log("Failed to fetch post list: ", error);
      }
    };
    fetchPostList();
    
  }, []);

  const changeId = (e) => {
    console.log('run');
    console.log(e.target.value);
  };
  // useEffect(()=>{
  //   if(alert){
  //     setTimeout(()=>{
  //       setAlert(false);
  //     },2000)
  //   }
  // },[alert])

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
                onClick={() => setShowDeline(true)}
              >
                <span>
                  <i>
                    <UilClockTwo />
                    <small className="notification-count">5</small>
                  </i>
                </span>
                <h3>Bài tập (Deadline)</h3>

                <NotificationDelineModal
                  onClose={() => setShowDeline(false)}
                  showDeline={showDeline}
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
                <img src={avatar} alt="" />
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
            OK {alert && <h2>Thêm bài viết thành công</h2>}
              <div>
                {listPosts.map((item, index) => (
                    <div>
                      {" "}
                      {/* test{item.postId} */}
                      <div className="feed">
                        <div className="head">
                          <div className="user">
                            <div className="profile-photo">
                              <img src={item.user.avatar} alt="" />
                            </div>
                            <div className="info">
                              <h3>{item.user.fullName}</h3>
                              <small> {format(Date.parse(item.createdDate), 'hh:mm')} </small>
                              <br />
                              <small> {format(Date.parse(item.createdDate), 'dd/MM/yyyy')} </small>
                            </div>
                          </div>
                          <span className="edit">
                            <i>
                              <UilEllipsisH />
                            </i>
                          </span>
                        </div>

                        <div>{item.content}</div>
                        {item.listUrl.map((url)=>{
                        return(
                          <div className="photo">
                        <img src={url.urlFile} alt="" />
                      </div>
                        )
                        })}
                        

                        <div className="action-buttons">
                          <div className="interaction-buttons">
                            <span className="custom-action">
                              <i>
                                <UilHeart />
                              </i>
                              <span className="h5">{item.countLike}</span>
                            </span>
                            <span className="custom-action">
                              <i>
                                <UilCommentDots />
                              </i>
                              <span className="h5">{item.countComment}</span>
                            </span>
                            <span className="custom-action">
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
                            Được thích bởi <b>Trần Phi</b> và{" "}
                            <b> {item.countLike-1} người khác</b>{" "}
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
                            <button className="btn btn-primary">
                              Bình luận
                            </button>
                          </form>
                        </div>
                        {item.listComment.map((cmt) => {
                         return(
                          <div>
                             <div className="comments">
                            <div className="profile-cmt">
                              <div className="profile-photo-cmt">
                                <img src={cmt.user.avatar} alt="" />
                              </div>
                              <div className="handle-cmt">
                                <h4>{cmt.user.fullName}</h4>
                                <p>{cmt.content}</p>
                                <p>{format(Date.parse(cmt.user.createdDate), 'hh:mm -  dd/mm/yyyy')}</p>
                              </div>
                            </div>
                          </div>
                          </div>
                         )
                        })}
                        <div className="all-comments text-muted">
                          Xem tất cả các bình luận
                        </div>
                      </div>
                    </div>
                  // );
                ))}
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
