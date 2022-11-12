import React from "react";
import useLogin from "../../../utils/useLogin/useLogin";

export default function CommentPost() {
  const { account } = useLogin();

  return (
    <div className="comments">
      <div className="profile-cmt">
        <div className="profile-photo-cmt">
          <img src={account.avatar} alt="" />
        </div>
        <div className="handle-cmt">
          <h4>{account.fullName}</h4>
          <p>Bài viết này xịn quá</p>
        </div>
      </div>
    </div>
  );
}
