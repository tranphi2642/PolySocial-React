import { React, useState } from "react";
import useLogin from "../../../utils/useLogin/useLogin";

import Asios from "./../../../../api/index";

const CreatePostModal = (props) => {
  const { account } = useLogin();
  const [itemInputPost, setItemInputPost] = useState({
    content: "",
  });
  const [file, setFile] = useState("");

  if (!props.showCreatePost) {
    return null;
  }

  const imageUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSummit = async (e) => {
    props.onClose();
    const formData = new FormData();
    formData.append("file", file);
    await Asios.Posts.upLoadFile(formData);
    const responseCreate = await Asios.Posts.createPost(itemInputPost);

    if (responseCreate.status === 200) {
      window.location.reload();
    } else {
      alert("FALSE POST");
    }
  };

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
              // onChange={(e) => setUser({ ...user, userId: e.target.value })}
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
