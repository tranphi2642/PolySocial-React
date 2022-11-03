import React from "react";
import useLogin from "../../../utils/useLogin/useLogin";

export default function AddFriend() {
  const { account } = useLogin();

  return (
    <div className="request">
      <div className="info">
        <div className="profile-photo">
          <img src={account.avatar} alt="" />
        </div>
        <div>
          <h5>Nguyễn Thăng</h5>
          <p className="text-muted">2 bạn chung</p>
        </div>
      </div>

      <div className="action">
        <button className="btn btn-primary">Xác nhận</button>
        <button className="btn">Huỷ</button>
      </div>
    </div>
  );
}
