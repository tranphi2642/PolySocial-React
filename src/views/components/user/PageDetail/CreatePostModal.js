import { React, useState } from "react";
import useLogin from "../../../utils/useLogin/useLogin";
import { useParams } from "react-router-dom";

import Asios from "./../../../../api/index";

const CreatePostModal = (props) => {
  const { id } = useParams();
  const { account } = useLogin();
  const socket = props.socket;
  const [itemInputPost, setItemInputPost] = useState({
    content: "",
    groupId: id,
    files: [],
  });

  const imageUpload = (e) => {
    for (var i = 0; i < e.target.files.length; i++) {
      itemInputPost.files.push(e.target.files[i]);
    }
  };

  const handleSummit = async () => {
    props.onClose();
    const formData = new FormData();
    formData.append("file", itemInputPost.files);
    const responseCreate = await Asios.Posts.createPost(itemInputPost);
    if (responseCreate) {
      socket.emit("Client-request-createPost");
      itemInputPost.files = [];
      window.location.reload();
    } else {
      alert("Create Post Fail");
    }
  };

  if (!props.showCreatePost) {
    return null;
  }

  return (
    <div className="modal-create-post" onClick={props.onClose}>
      <div className="cart-create" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSummit} className="form-create">
          <h3>Tạo bài viết</h3>
          <div className="modal-profile">
            <div className="profile-photo">
              <img src={account.avatar} alt="" />
            </div>
            <div className="handle">
              <h4>{account.fullName}</h4>
              <p className="text-muted">{account.email}</p>
            </div>
          </div>

          <div className="form-input">
            <label htmlFor="content">Nội dung</label>
            <textarea
              onChange={(event) =>
                setItemInputPost({
                  ...itemInputPost,
                  content: event.target.value,
                })
              }
              type="text"
              id="content"
              placeholder="Hãy nhập nội dung bài đăng"
            ></textarea>
          </div>

          <div className="form-input">
            <label htmlFor="upload">Tải ảnh</label>
            <input
              onChange={imageUpload}
              type="file"
              id="upload"
              accept="image/jpeg, image/png, image/jpg"
              multiple="multiple"
              placeholder="Hãy chọn ảnh của bạn."
            />
          </div>

          <button className="btn btn-primary">Đăng bài</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
