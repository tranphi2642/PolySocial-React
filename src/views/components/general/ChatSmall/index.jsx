import React from "react";
import useLogin from "../../../utils/useLogin/useLogin";

export default function ChatSmall() {
  const { account } = useLogin();

  // return (
  //   <div className="message">
  //     <div className="profile-photo">
  //       <img src={account.avatar} alt="" />
  //     </div>

  //     <div className="message-body">
  //       <h5>{account.fullName}</h5>
  //       <p className="text-muted">Xin chào</p>
  //     </div>
  //   </div>
  // );
}
