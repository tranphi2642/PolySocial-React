import React, { useEffect, useState } from "react";
import Asios from "../../../../api/index";

const EditGroupModal = (props) => {
  const [post, setPost] = useState({
    content: "",
    file: "",
  });
  const [file, setFile] = useState("");

  useEffect(() => {
    getOneData();
  }, [props.postId.current]);

  const getOneData = async () => {
    // const response = await Asios.Content.getOnePost(props.postId.current);
    // if (response) {
    //   setPost(response);
    // }
  };

  const imageUpload = (e) => {
    setFile(e.target.files[0]);
  };

  if (!props.showEdit) {
    return null;
  }

  return (
    <div className="modal-edit-content" onClick={props.onClose}>
      <div className="cart-update" onClick={(e) => e.stopPropagation()}>
        <form className="form-create">
          <h3>Chỉnh sửa hoặc xoá bài viết</h3>

          <div className="form-input">
            <label htmlFor="content">Nội dung</label>
            <input
              type="text"
              id="content"
              placeholder="Hãy nhập nội dung bài đăng"
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
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

          <div className="buttons-update">
            <button>
              <i className="uil uil-plus"></i> Cập nhật
            </button>
            <button>
              <i className="uil uil-trash"></i> Xoá
            </button>
            <button>
              <i className="uil uil-redo"></i> Làm mới
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditGroupModal;
