import React from "react";

const EditGroupModal = (props) => {
  if (!props.showEdit) {
    return null;
  }

  return (
    <div className="modal-edit-content" onClick={props.onClose}>
      <div className="cart-update" onClick={(e) => e.stopPropagation()}>
        <form className="form-create">
          <h3>Chỉnh sửa hoặc xoá bài viết</h3>

          <div className="form-input">
            <label htmlFor="postId">Mã bài viết</label>
            <input type="text" id="postId" />
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
              type="date"
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
