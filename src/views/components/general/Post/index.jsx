import React from "react";
import useLogin from "../../../utils/useLogin/useLogin";
import {
  UilHeart,
  UilCommentDots,
  UilShareAlt,
  UilBookmarkFull,
  UilEllipsisH,
} from "@iconscout/react-unicons";

import post from "../../../../assets/images/post.jpg";
import CommentPost from "../CommentPost";
import LikePost from "../LikePost";

export default function Post() {
  const { account } = useLogin();

  return (
    <div className="feed">
      <div className="head">
        <div className="user">
          <div className="profile-photo">
            <img src={account.avatar} alt="" />
          </div>
          <div className="info">
            <h3>{account.fullName}</h3>
            <small> FPT Polytechnic, 15 phút trước </small>
            <br />
            <small> 26-10-2022 </small>
          </div>
        </div>
        <span className="edit">
          <i>
            <UilEllipsisH />
          </i>
        </span>
      </div>

      <div>
        Ở đây ai đã từng thất bại trong tình yêu không nè?? Giơ tay lên nào 🙌🙌
        👉 Chỉ mới mở màn thôi nhé, còn nhiều tiết mục cháy hơn thế nữa 🔥
      </div>

      <div className="photo">
        <img src={post} alt="" />
      </div>

      <div className="action-buttons">
        <div className="interaction-buttons">
          <span className="custom-action">
            <i>
              <UilHeart />
            </i>
            <span className="h5">15</span>
          </span>
          <span className="custom-action">
            <i>
              <UilCommentDots />
            </i>
            <span className="h5">3</span>
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
        <LikePost />
      </div>

      <div className="cmt">
        <form className="create-cmt">
          <div className="profile-photo-cmt">
            <img src={account.avatar} alt="" />
          </div>
          <input
            type="text"
            name="post"
            id="create-cmt"
            placeholder="Viết bình luận..."
          />
          <button className="btn btn-primary">Bình luận</button>
        </form>
      </div>

      <div>
        <CommentPost />

        <CommentPost />

        <CommentPost />
      </div>

      <div className="all-comments text-muted">Xem tất cả các bình luận</div>
    </div>
  );
}
