import React from "react";

export default function ChatSmall(props) {
  return (
    <div className="message">
      <div className="profile-photo">
        <img src={props.friend.friendAvatar} alt="" />
      </div>

      <div className="message-body">
        <h5>{props.friend.friendName}</h5>
        <p className="text-muted">Xin chào</p>
      </div>
    </div>
  );
}
