import React, { useState } from "react";
import Axios from "../../../../api/index";
import { useParams } from "react-router-dom";

const GroupModal = (props) => {
  const { id } = useParams();

  const [user, setUser] = useState({
    userId: "",
    groupId: id,
  });

  const createUser = async () => {
    const response = await Axios.Groups.createStudentGroup(user);
    if (response) {
      alert("Create student successfully!");
      props.onClose();
      window.location.reload();
    } else {
      alert("Create student failed!");
    }
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-create-user" onClick={props.onClose}>
      <div className="cart-create" onClick={(e) => e.stopPropagation()}>
        <div className="form-create">
          <h3>Thêm sinh viên</h3>

          <div className="form-input">
            <label htmlFor="groupId">Mã nhóm</label>
            <input
              type="text"
              id="groupId"
              placeholder="Hãy nhập mã nhóm"
              defaultValue={user.groupId}
              disabled
            />
          </div>

          <div className="form-input">
            <label htmlFor="userId">Mã tài khoản</label>
            <input
              type="text"
              id="userId"
              placeholder="Hãy nhập mã tài khoản"
              onChange={(e) => setUser({ ...user, userId: e.target.value })}
            />
          </div>

          <button onClick={() => createUser(user.userId, user.groupId)}>
            <i className="uil uil-plus"></i> Tạo
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupModal;
