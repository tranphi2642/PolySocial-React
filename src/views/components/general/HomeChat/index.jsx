import React from "react";

export default function HomeChat(props) {
  const socket = props.socket;

  return (
    <React.Fragment>
      <div className="heading">
        <h4>Nhắn tin</h4> <i className="uil uil-edit"></i>
      </div>
      {/* <!------------------------------- Search bar ----------------------------> */}
      <div className="search-bar">
        <i className="uil uil-search"></i>
        <input type="search" id="search-bar" placeholder="Tìm kiếm tin nhắn" />
      </div>
      {/* <!------------------------------- Messages ----------------------------> */}
      <div className="all-messages">
        <div className="message">
          <div className="profile-photo">
            {/* <img src={account.avatar} alt="" /> */}
          </div>

          <div className="message-body">
            {/* <h5>{account.fullName}</h5> */}
            <p className="text-muted">Xin chào</p>
          </div>
        </div>
      </div>{" "}
    </React.Fragment>
  );
}
