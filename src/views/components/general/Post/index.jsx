import { React, useState } from "react";
import useLogin from "../../../utils/useLogin/useLogin";
import {
  UilHeart,
  UilCommentDots,
  UilShareAlt,
  UilBookmarkFull,
  UilEllipsisH,
} from "@iconscout/react-unicons";

import CommentPost from "../CommentPost";
import LikePost from "../LikePost";
import Axios from "./../../../../api/index";

export default function Post(props) {
  const { account } = useLogin();

  const [itemInputComment, setItemInputComment] = useState({
    postId: "",
    content: "",
  });

  const createComment = async (e, postId) => {
    const data = {
      postId: postId,
      content: itemInputComment.content,
    };
    const response = await Axios.Comments.createComment(data);
    if (response) {
      window.location.reload();
    }
  };

  const likeUnLike = async (e, postId) => {
    const data = {
      postId: postId,
    };
    const response = await Axios.Likes.likeUnLike(data);
    if (response) {
      window.location.reload();
    }
  };

  const handleChange = (e, id) => {
    e.preventDefault();
    setItemInputComment({ ...itemInputComment, postId: e.target.value });
  };

  return (
    <div key={props.postId}>
      <input
        type="hidden"
        value={props.postId}
        onChange={(e) => handleChange(e, props.postId)}
      />
      <div className="feed">
        <div className="head">
          <div className="user">
            <div className="profile-photo">
              <img src={props.user.avatar} alt="" />
            </div>
            <div className="info">
              <h3>{props.user.fullName}</h3>
              <small> {props.createdDate} </small>
              <br />
              <small> {props.createdDate} </small>
            </div>
          </div>
          <span className="edit">
            <i>
              <UilEllipsisH />
            </i>
          </span>
        </div>

        <div>{props.content}</div>
        {props.listUrl.map((url, index) => {
          return (
            <div className="photo" key={index}>
              <img src={url.urlFile} alt="" />
            </div>
          );
        })}

        <div className="action-buttons">
          <div className="interaction-buttons">
            <span className="custom-action">
              <button
                type="button"
                onClick={(e) => likeUnLike(e, props.postId)}
              >
                <i>
                  <UilHeart />
                </i>
              </button>
              <span className="h5">{props.countLike}</span>
            </span>
            <span className="custom-action">
              <button type="button">
                <i>
                  <UilCommentDots />
                </i>
              </button>
              <span className="h5">{props.countComment}</span>
            </span>
            <span className="custom-action">
              <button type="button">
                <i className="uil uil-share-alt">
                  <UilShareAlt />
                </i>
              </button>
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
          <LikePost item={props} />
        </div>

        <div className="cmt">
          <form className="create-cmt">
            <div className="profile-photo-cmt">
              <img src={account.avatar} alt="" />
            </div>
            <input
              onChange={(event) =>
                setItemInputComment({
                  ...itemInputComment,
                  content: event.target.value,
                })
              }
              type="text"
              name="post"
              id="create-cmt"
              placeholder="Viết bình luận..."
            />
            <button
              onClick={(e) => createComment(e, props.postId)}
              type="button"
              className="btn btn-primary"
            >
              Bình luận
            </button>
            {/* <input
                type="text"
                id="create-post"
                placeholder="Hôm nay bạn muốn đăng gì thế?"
                onClick={() => setShowCreatePost(true)}
              /> */}
          </form>
        </div>

        <div>
          <CommentPost item={props.listComment} />
        </div>
        <div className="all-comments text-muted">Xem tất cả các bình luận</div>
      </div>
    </div>
  );
}
