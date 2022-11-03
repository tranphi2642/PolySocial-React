import React, { useState } from "react";
import PostApi from "../../api/User/PostApi";
// import React from "react";

import avatar from "../../assets/images/1.jpg";

// export default function Home(){
//   console.log("run")
export default function CreatePostModal(props) {
  const [itemInputPost, setItemInputPost] = useState("");
  const [file, setFile] = useState("");
  // const [showCreatePost, setShowCreatePost] = useState(true);
  // const [selectedFile, setSelectedFile] = React.useState(null);

  const state={
    file:null
  }

  const imageUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const upLoadFile = ()=>{
    const formData = new FormData()
    formData.append('file',file)
    PostApi.upLoadFile(formData);
  }


//kkkk
  const handleSummit = (e) => {
    e.preventDefault();
    PostApi.createPost(itemInputPost);
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
              onChange={(event) => setItemInputPost(event.target.value)}
              value={itemInputPost}
              type="text"
              required
              id="content"
              placeholder="Hãy nhập nội dung bài đăng"
            ></textarea>
          </div>

          <div className="form-input">
            <label htmlFor="upload">Tải ảnh</label>
            <input
              type="file" multiple
              id="file" name="file" 
              accept="image/jpeg, image/png, image/jpg"
              onChange={imageUpload}
              placeholder="Hãy chọn ảnh của bạn."
            />
          </div>

          <button onClick={upLoadFile} className="btn btn-primary">Đăng bài</button>
        </form>
      </div>
    </div>
  );
}
// }
// export default CreatePostModal;