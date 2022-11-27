import React from "react";
import ChatSmall from "../../general/ChatSmall";

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
      <ChatSmall />
    </React.Fragment>
  );
}
