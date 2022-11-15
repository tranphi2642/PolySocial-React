import React, { useEffect, useState } from "react";
import AddFriend from "../AddFriend";
import Asios from "./../../../../api/index";

const SearchFriend = (props) => {
  const [showSearch, setShowSearch] = useState([]);

  useEffect(() => {
    searchFriend();
  }, [props.search]);

  const searchFriend = async () => {
    const response = await Asios.Friends.searchUserByEmail(props.search);
    setShowSearch(response);
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-search" onClick={props.onClose}>
      <div className="cart-search" onClick={(e) => e.stopPropagation()}>
        <div className="form-search">
          <h2>Tìm kiếm bạn</h2>
          {showSearch.map((item) => (
            <AddFriend {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFriend;
