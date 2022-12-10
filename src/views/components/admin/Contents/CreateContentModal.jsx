import React, { useState } from "react";
import Asios from "./../../../../api/index";

const ContentModal = (props) => {
  const [itemInputPost, setItemInputPost] = useState({
    content: "",
    groupId: "",
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
      window.location.reload();
      alert("Create Post Success");
    } else {
      alert("Create Post Fail");
    }
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-create-content" onClick={props.onClose}>
      <div className="cart-create" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSummit} className="form-create">
          <h3>Tạo bài viết</h3>

          <div className="form-input">
            <label htmlFor="groupId">Mã nhóm học tập</label>
            <input
              onChange={(event) =>
                setItemInputPost({
                  ...itemInputPost,
                  groupId: event.target.value,
                })
              }
              type="text"
              id="groupId"
              placeholder="Hãy nhập mã nhóm học tập"
            />
          </div>

          <div className="form-input">
            <label htmlFor="content">Nội dung</label>
            <input
              onChange={(event) =>
                setItemInputPost({
                  ...itemInputPost,
                  content: event.target.value,
                })
              }
              type="text"
              id="content"
              placeholder="Hãy nhập nội dung bài đăng"
            />
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

          <button>
            <i className="uil uil-plus"></i> Tạo
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContentModal;
