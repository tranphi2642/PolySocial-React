import React from "react";

import avatar from "../../../../assets/images/1.jpg";

const CreatePostModal = (props) => {
  if (!props.showCreatePost) {
    return null;
  }

  return (
    <div className="modal-create-post" onClick={props.onClose}>
      <div className="cart-create" onClick={(e) => e.stopPropagation()}>
        <form className="form-create">
          <h3>Tạo bài viết</h3>
          <div className="modal-profile">
            <div className="profile-photo">
              <img src={avatar} alt="" />
            </div>
            <div className="handle">
              <h4>Trần Phi</h4>
              <p className="text-muted">@pi2642</p>
            </div>
          </div>

          <div className="form-input">
            <label htmlFor="content">Nội dung</label>
            <textarea
              type="text"
              id="content"
              placeholder="Hãy nhập nội dung bài đăng"
            ></textarea>
          </div>

          <div className="form-input">
            <label htmlFor="upload">Tải ảnh</label>
            <input
              type="file"
              id="upload"
              accept="image/jpeg, image/png, image/jpg"
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
