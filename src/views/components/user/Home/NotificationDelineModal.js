import React from "react";
import avatar from "../../../../assets/images/1.jpg";

const NotificationDelineModal = (props) => {
  if (!props.showDeline) {
    return null;
  }

  return (
    <div onClick={props.onClose}>
      <div
        className="notifications-deline"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="profile-photo">
            <img src={avatar} alt="" />
          </div>
          <div className="notification-body">
            <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
            <small className="text-muted">1 phút trước</small>
          </div>
        </div>

        <div>
          <div className="profile-photo">
            <img src={avatar} alt="" />
          </div>
          <div className="notification-body">
            <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
            <small className="text-muted">1 phút trước</small>
          </div>
        </div>

        <div>
          <div className="profile-photo">
            <img src={avatar} alt="" />
          </div>
          <div className="notification-body">
            <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
            <small className="text-muted">1 phút trước</small>
          </div>
        </div>

        <div>
          <div className="profile-photo">
            <img src={avatar} alt="" />
          </div>
          <div className="notification-body">
            <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
            <small className="text-muted">1 phút trước</small>
          </div>
        </div>

        <div>
          <div className="profile-photo">
            <img src={avatar} alt="" />
          </div>
          <div className="notification-body">
            <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
            <small className="text-muted">1 phút trước</small>
          </div>
        </div>

        <div>
          <div className="profile-photo">
            <img src={avatar} alt="" />
          </div>
          <div className="notification-body">
            <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
            <small className="text-muted">1 phút trước</small>
          </div>
        </div>

        <div>
          <div className="profile-photo">
            <img src={avatar} alt="" />
          </div>
          <div className="notification-body">
            <b>Nguyễn Thăng</b> đã bình luận bài viết của bạn
            <small className="text-muted">1 phút trước</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDelineModal;
