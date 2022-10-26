import React from "react";

const EditContentModal = (props) => {
  if (!props.showEdit) {
    return null;
  }

  return (
    <div className="modal-edit-group" onClick={props.onClose}>
      <div className="cart-update" onClick={(e) => e.stopPropagation()}>
        <form className="form-create">
          <h3>Chỉnh sửa hoặc xoá nhóm</h3>

          <div className="form-input">
            <label htmlFor="group">Tên nhóm</label>
            <input type="text" id="group" placeholder="Hãy nhập tên nhóm" />
          </div>

          <div className="form-input">
            <label htmlFor="member">Tổng thành viên</label>
            <input
              type="number"
              id="member"
              placeholder="Hãy nhập số lượng thành viên"
            />
          </div>

          <div className="form-input">
            <label htmlFor="description">Mô tả</label>
            <input type="text" id="description" placeholder="Hãy nhập mô tả" />
          </div>

          <div className="form-input">
            <label htmlFor="">Ngày tạo</label>
            <input type="datetime" id="" placeholder="Hãy nhập ngày tạo" />
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

export default EditContentModal;
