import React from "react";
import { Link } from "react-router-dom";
import {
  UilSearch,
  UilHeart,
  UilCommentDots,
  UilShareAlt,
  UilBookmarkFull,
  UilEllipsisH,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
import Nav from "../../general/Nav/index";

import avatar from "../../../../assets/images/1.jpg";
import post from "../../../../assets/images/post.jpg";
import "./index.scss";

export default function index() {
  return (
    <React.Fragment>
      <Nav />
      <main className="pages">
        <div className="container-page">
          <div className="left">
            <div className="page-search">
              <h3>Nhóm</h3>
              <div className="search">
                <input type="text" placeholder="Tìm kiếm nhóm" />
                <button>
                  <i>
                    <UilSearch />
                  </i>
                </button>
              </div>
              <hr />
              <div className="page-search-join">
                <h4>Nhóm bạn đã tìm kiếm</h4>
                <Link className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">Nhóm Công khai - 31 thành viên</p>
                  </div>
                  <button>
                    <UilSignOutAlt />
                  </button>
                </Link>
              </div>
              <hr />
              <div className="page-join">
                <h4>Nhóm bạn đã tham gia</h4>
                <Link to={"/pageDetail"} className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">
                      Lần hoạt động gần nhất: 1 tháng trước
                    </p>
                  </div>
                </Link>

                <Link to={"/pageDetail"} className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">
                      Lần hoạt động gần nhất: 1 tháng trước
                    </p>
                  </div>
                </Link>

                <Link to={"/pageDetail"} className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">
                      Lần hoạt động gần nhất: 1 tháng trước
                    </p>
                  </div>
                </Link>

                <Link to={"/pageDetail"} className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">
                      Lần hoạt động gần nhất: 1 tháng trước
                    </p>
                  </div>
                </Link>

                <Link to={"/pageDetail"} className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">
                      Lần hoạt động gần nhất: 1 tháng trước
                    </p>
                  </div>
                </Link>

                <Link to={"/pageDetail"} className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">
                      Lần hoạt động gần nhất: 1 tháng trước
                    </p>
                  </div>
                </Link>

                <Link to={"/pageDetail"} className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">
                      Lần hoạt động gần nhất: 1 tháng trước
                    </p>
                  </div>
                </Link>

                <Link to={"/pageDetail"} className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">
                      Lần hoạt động gần nhất: 1 tháng trước
                    </p>
                  </div>
                </Link>

                <Link to={"/pageDetail"} className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">
                      Lần hoạt động gần nhất: 1 tháng trước
                    </p>
                  </div>
                </Link>

                <Link to={"/pageDetail"} className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">
                      Lần hoạt động gần nhất: 1 tháng trước
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="middle">
            {/* <!------------------------------- Feeds ----------------------------> */}
            <div className="feeds">
              <h4 className="text-bold">Hoạt động gần đây</h4>
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
        </div>
      </main>
    </React.Fragment>
  );
}
