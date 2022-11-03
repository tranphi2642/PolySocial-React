import React from "react";
import {
  UilHeart,
  UilCommentDots,
  UilShareAlt,
  UilBookmarkFull,
  UilEllipsisH,
} from "@iconscout/react-unicons";
import Nav from "../../general/Nav/index";

import avatar from "../../../../assets/images/1.jpg";
import post from "../../../../assets/images/post.jpg";
import NavPage from "../../general/NavPage";

export default function pageDetail() {
  return (
    <React.Fragment>
      <Nav />
      <main className="pages">
        <div className="container-page">
          <div className="left">
            <NavPage />
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
