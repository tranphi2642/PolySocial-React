import React from "react";
import AddFriend from "../AddFriend";

const SearchFriend = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-search" onClick={props.onClose}>
      <div className="cart-search" onClick={(e) => e.stopPropagation()}>
        <form className="form-search">
          <h2>Tìm kiếm bạn</h2>
          <AddFriend />
          <AddFriend />
          <AddFriend />
          <AddFriend />
        </form>
      </div>
    </div>
  );
};

export default SearchFriend;
