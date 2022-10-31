import React from "react";

const ContentModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-create-content" onClick={props.onClose}>
      <div className="cart-create" onClick={(e) => e.stopPropagation()}>
        <form className="form-create">
          <h3>Tạo bài viết</h3>

          <div className="form-input">
            <label htmlFor="groupId">Mã nhóm</label>
            <input type="text" id="groupId" placeholder="Hãy nhập mã nhóm" />
          </div>

          <div className="form-input">
            <label htmlFor="userId">Mã người tạo</label>
            <input
              type="text"
              id="userId"
              placeholder="Hãy nhập mã người tạo"
            />
          </div>

          <div className="form-input">
            <label htmlFor="content">Nội dung</label>
            <input
              type="text"
              id="content"
              placeholder="Hãy nhập nội dung bài đăng"
            />
          </div>

          <div className="form-input">
            <label htmlFor="createdDate">Ngày tạo</label>
            <input
              type="datetime-local"
              id="createdDate"
              placeholder="Hãy nhập ngày tạo"
            />
          </div>

          <div className="form-input">
            <label htmlFor="status">Trạng thái</label>
            <div className="status">
              <div>
                <input type="radio" id="status-true" defaultValue={true} />
                <span className="checkmark">Hiển thị</span>
              </div>
              <div>
                <input type="radio" id="status-false" defaultValue={false} />
                <span className="checkmark">Không hiển thị</span>
              </div>
            </div>
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
