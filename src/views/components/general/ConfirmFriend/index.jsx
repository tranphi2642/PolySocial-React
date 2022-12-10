import React from "react";
import Asios from "./../../../../api/index";

export default function AddFriend(props) {
  const handleAccept = async () => {
    const response = await Asios.Friends.acceptFriend(props);
    if (response.status === 200) {
      window.location.reload();
    }
  };

  return (
    <div className="request" key={props.userInviteId}>
      <div className="info">
        <div className="profile-photo">
          <img src={props.avatarUserInvite} alt="" />
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
