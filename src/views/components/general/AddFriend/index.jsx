import React from "react";
import Asios from "./../../../../api/index";

export default function AddFriend(props) {
  console.log("=>>>>>>>>>>>", props);
  const handleAddFriend = async () => {
    const response = await Asios.Friends.addFriend(props);
    console.log(response);
  };

  return (
    <div className="modal-profile">
      <div className="handle">
        <div className="profile-photo">
          <img src={props.avatar} alt="" />
        </div>
        <div>
          <h4>{props.fullName}</h4>
          <p className="text-muted">{props.email}</p>
        </div>
      </div>
      <div className="handle-buttoms">
        <button className="btn btn-primary" onClick={handleAddFriend}>
          Thêm bạn
        </button>
      </div>
    </div>
  );
}
