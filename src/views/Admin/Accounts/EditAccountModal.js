import React from "react";

const EditAccountModal = (props) => {
  if (!props.showEdit) {
    return null;
  }

  return (
    <div className="modal-edit-account" onClick={props.onClose}>
      <div className="cart-update" onClick={(e) => e.stopPropagation()}>
        <form className="form-create">
          <h3>Chỉnh sửa hoặc xoá tài khoản</h3>

          <div className="form-input">
            <label htmlFor="avt">Ảnh</label>
            <input type="file" id="avt" placeholder="Hãy chọn ảnh" />
          </div>

          <div className="form-input">
            <label htmlFor="mssv">Mã số sinh viên</label>
            <input
              type="text"
              id="mssv"
              placeholder="Hãy nhập mã số sinh viên"
              defaultValue="PS16509"
            />
          </div>

          <div className="form-input">
            <label htmlFor="fullname">Họ và tên</label>
            <input
              type="text"
              id="fullname"
              placeholder="Hãy nhập họ và tên"
              defaultValue="Trần Mậu Phi"
            />
          </div>

          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Hãy nhập email"
              defaultValue="phitmps16509@fpt.edu.vn"
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

export default EditAccountModal;
