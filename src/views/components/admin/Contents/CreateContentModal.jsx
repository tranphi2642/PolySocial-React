import React, { useState } from "react";
import Asios from "./../../../../api/index";

const ContentModal = (props) => {
  const [itemInputPost, setItemInputPost] = useState({
    content: "",
  });
  const [file, setFile] = useState("");

  const imageUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSummit = async (e) => {
    props.onClose();
    const formData = new FormData();
    formData.append("file", file);
    // await Asios.Posts.upLoadFile(formData);
    // const responseCreate = await Asios.Posts.createPost(itemInputPost);

    // if (responseCreate.status === 200) {
    //   window.location.reload();
    // } else {
    //   alert("FALSE POST");
    // }
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
