import React from "react";

const GroupModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-create-user" onClick={props.onClose}>
      <div className="cart-create" onClick={(e) => e.stopPropagation()}>
        <form className="form-create">
          <h3>Thêm sinh viên</h3>

          <div className="form-input">
            <label htmlFor="userId">Mã tài khoản</label>
            <input
              type="text"
              id="userId"
              placeholder="Hãy nhập mã tài khoản"
            />
          </div>

          <div className="form-input">
            <label htmlFor="groupId">Mã nhóm</label>
            <input type="text" id="groupId" placeholder="Hãy nhập mã nhóm" />
          </div>

          <button>
            <i className="uil uil-plus"></i> Tạo
          </button>
        </form>
      </div>
    </div>
  );
};

export default GroupModal;
