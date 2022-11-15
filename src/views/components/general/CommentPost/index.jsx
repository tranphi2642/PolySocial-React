import React from "react";
import useLogin from "../../../utils/useLogin/useLogin";
import { format } from "date-fns";


export default function CommentPost({ item }) {
  const { account } = useLogin();
  return (
    <div>
      {item.map((cmt, index) => (
        <div className="comments" key={index}>
          <div className="profile-cmt">
            <div className="profile-photo-cmt">
              <img src={cmt.user.avatar} alt="" />
            </div>
            <div className="handle-cmt">
              <h4>{cmt.user.fullName}</h4>
              <p>{format(Date.parse(cmt.createdDate), "hh:mm")}</p>
              <p>{cmt.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
