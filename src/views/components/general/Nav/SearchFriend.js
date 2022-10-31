import React from "react";

import avatar from "../../../../assets/images/1.jpg";

const SearchFriend = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-search" onClick={props.onClose}>
      <div className="cart-search" onClick={(e) => e.stopPropagation()}>
        <form className="form-search">
          <h2>Tìm kiếm bạn</h2>
          <div className="modal-profile">
            <div className="profile-photo">
              <img src={avatar} alt="" />
            </div>

            <div className="handle">
              <h4>Trần Phi</h4>
              <p className="text-muted">@pi2642</p>
            </div>

            <div className="handle-buttoms">
              <button className="btn btn-primary">Thêm bạn</button>
              <button className="btn">Nhắn tin</button>
            </div>
          </div>

          <div className="modal-profile">
            <div className="profile-photo">
              <img src={avatar} alt="" />
            </div>

            <div className="handle">
              <h4>Trần Phi</h4>
              <p className="text-muted">@pi2642</p>
            </div>

            <div className="handle-buttoms">
              <button className="btn btn-primary">Thêm bạn</button>
              <button className="btn">Nhắn tin</button>
            </div>
          </div>

          <div className="modal-profile">
            <div className="profile-photo">
              <img src={avatar} alt="" />
            </div>

            <div className="handle">
              <h4>Trần Phi</h4>
              <p className="text-muted">@pi2642</p>
            </div>

            <div className="handle-buttoms">
              <button className="btn btn-primary">Thêm bạn</button>
              <button className="btn">Nhắn tin</button>
            </div>
          </div>

          <div className="modal-profile">
            <div className="profile-photo">
              <img src={avatar} alt="" />
            </div>

            <div className="handle">
              <h4>Trần Phi</h4>
              <p className="text-muted">@pi2642</p>
            </div>

            <div className="handle-buttoms">
              <button className="btn btn-primary">Thêm bạn</button>
              <button className="btn">Nhắn tin</button>
            </div>
          </div>

          <div className="modal-profile">
            <div className="profile-photo">
              <img src={avatar} alt="" />
            </div>

            <div className="handle">
              <h4>Trần Phi</h4>
              <p className="text-muted">@pi2642</p>
            </div>

            <div className="handle-buttoms">
              <button className="btn btn-primary">Thêm bạn</button>
              <button className="btn">Nhắn tin</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFriend;
