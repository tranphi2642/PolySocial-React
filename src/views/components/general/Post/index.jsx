import { React, useEffect, useState } from "react";
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
import { format } from "date-fns";
import Axios from "./../../../../api/index";

export default function Post() {
  const { account } = useLogin();

  const [listPosts, setListPost] = useState([]);

  const [itemInputComment, setItemInputComment] = useState({
    postId: "",
    content: "",
  });

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await Axios.Posts.getAllByAllPost();
        setListPost(response.listPostDTO);
      } catch (error) {
        console.log("Failed to fetch post list: ", error);
      }
    };
    fetchPostList();
  }, []);

  const createComment = async (e, postId) => {
    const data = {
      postId:postId,
      content :itemInputComment.content
    }
    const response = await Axios.Comments.createComment(
      data
    );
    if (response) {
      window.location.reload();
    } else {
      alert("FALSE CMT");
    }
  };

  const likeUnLike = async (e, postId) => {
    const data = {
      postId:postId,
    }
    const response = await Axios.Likes.likeUnLike(
      data
    );
    if (response) {
      window.location.reload();
    } else {
      alert("FALSE Like");
  }
  };

  const handleChange = (e, id) => {
    e.preventDefault();
    setItemInputComment({ ...itemInputComment, postId: e.target.value });
  };

  return (
    <div>
      {listPosts.map((item, index) => (
        <div>
          <input
            type="hidden"
            value={item.postId}
            onChange={(e) => handleChange(e, item.postId)}
          />
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src={item.user.avatar} alt="" />
                </div>
                <div className="info">
                  <h3>{item.user.fullName}</h3>
                  <small>
                    {" "}
                    {format(Date.parse(item.createdDate), "hh:mm")}{" "}
                  </small>
                  <br />
                  <small>
                    {" "}
                    {format(Date.parse(item.createdDate), "dd/MM/yyyy")}{" "}
                  </small>
                </div>
              </div>
              <span className="edit">
                <i>
                  <UilEllipsisH />
                </i>
              </span>
            </div>

            <div>{item.content}</div>
            {item.listUrl.map((url) => {
              return (
                <div className="photo">
                  <img src={url.urlFile} alt="" />
                </div>
              );
            })}

            <div className="action-buttons">
              <div className="interaction-buttons">
              <button onClick={(e) => likeUnLike(e, item.postId)}>Like</button>
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
              <LikePost item={item} />
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
                  onClick={(e) => createComment(e, item.postId)}
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
              <CommentPost item={item.listComment} />
            </div>
            <div className="all-comments text-muted">
              Xem tất cả các bình luận
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
