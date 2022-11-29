import React, { useEffect, useState } from "react";
import FriendSmall from "../FriendSmall";
import Asios from "./../../../../api/index";

export default function HomeChat(props) {
  const socket = props.socket;

  const [listFriends, setListFriend] = useState([]);

  useEffect(() => {
    getAllFriend();
  }, []);

  const getAllFriend = async () => {
    const response = await Asios.Friends.getAllFriend();
    setListFriend(response);
  };

  console.log(listFriends);

  return (
    <React.Fragment>
      <div className="heading">
        <h4>Danh sách bạn bè</h4> <i className="uil uil-edit"></i>
      </div>
      {/* <!------------------------------- Search bar ----------------------------> */}
      <div className="search-bar">
        <i className="uil uil-search"></i>
        <input type="search" id="search-bar" placeholder="Tìm kiếm bạn bè" />
      </div>
      {/* <!------------------------------- Messages ----------------------------> */}
      {listFriends.map((friend, index) => (
        <FriendSmall key={index} friend={friend} socket={socket} />
      ))}
    </React.Fragment>
  );
}
