import React from "react";
import useLogin from "../../../utils/useLogin/useLogin";

export default function LikePost() {
  const { account } = useLogin();

  return (
    <React.Fragment>
      <span>
        <img src={account.avatar} alt="" />
      </span>
      <span>
        <img src={account.avatar} alt="" />
      </span>
      <span>
        <img src={account.avatar} alt="" />
      </span>

      <p>
        Được thích bởi <b>{account.fullName}</b> và <b> 4 người khác</b>{" "}
      </p>
    </React.Fragment>
  );
}
