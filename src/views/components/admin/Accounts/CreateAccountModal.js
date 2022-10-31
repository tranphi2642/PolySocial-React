import React from "react";
import { UilPlus } from "@iconscout/react-unicons";

const AccountModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-create-account" onClick={props.onClose}>
      <div className="cart-create" onClick={(e) => e.stopPropagation()}>
        <form className="form-create">
          <h3>Tạo tài khoản</h3>

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

          <button>
            <UilPlus /> Tạo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountModal;
