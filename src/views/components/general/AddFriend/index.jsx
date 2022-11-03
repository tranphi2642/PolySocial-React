import React from "react";
import avatar from "../../../../assets/images/1.jpg";

export default function AddFriend() {
  return (
    <div className="modal-profile">
      <div className="handle">
        <div className="profile-photo">
          <img src={avatar} alt="" />
        </div>
        <div>
          <h4>Trần Phi</h4>
          <p className="text-muted">@pi2642</p>
        </div>
      </div>
      <div className="handle-buttoms">
        <button className="btn btn-primary">Thêm bạn</button>
      </div>
    </div>
  );
}
