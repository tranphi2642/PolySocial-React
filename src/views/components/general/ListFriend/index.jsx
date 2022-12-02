import React, { useEffect, useState } from "react";
import FriendSmall from "../FriendSmall";
import Asios from "./../../../../api/index";
import { Link } from "react-router-dom";

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

  // const handleChange = (e, id) => {
  //   e.preventDefault();
  //   console.log("id", id);
  // };

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
        <Link to={`/messages`} state={{ from: friend }} className="menu-item">
            <FriendSmall key={index} friend={friend} socket={socket} />
        </Link>
      ))}
    </React.Fragment>
  );
}
