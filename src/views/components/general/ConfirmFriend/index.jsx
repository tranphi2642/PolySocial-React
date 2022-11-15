import React from "react";
import useLogin from "../../../utils/useLogin/useLogin";
import Asios from "./../../../../api/index";

export default function AddFriend(props) {
  const { account } = useLogin();
  const handleAccept = async () => {
    const response = await Asios.Friends.acceptFriend(props);
    if (response.status === 200) {
      window.location.reload();
    }
  };

  return (
    <div className="request">
      <div className="info">
        <div className="profile-photo">
          <img src={account.avatar} alt="" />
        </div>
        <div>
          <h5>{props.fullNameUserInvite}</h5>
          <p className="text-muted">2 bạn chung</p>
        </div>
      </div>

      <div className="action">
        <button className="btn btn-primary" onClick={handleAccept}>
          Xác nhận
        </button>
        <button className="btn">Huỷ</button>
      </div>
    </div>
  );
}
