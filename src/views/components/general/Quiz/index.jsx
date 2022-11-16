import React from "react";
import avatar from "../../../../assets/images/1.jpg";

export default function Quiz() {
  return (
    <React.Fragment>
      <div className="profile-photo-1">
        <img src={avatar} alt="" />
      </div>
      <div className="handle">
        <h4>
          Trần Phi<span> đã tạo mới một bài tập: Lab 1</span>
        </h4>
        <p className="text-muted">28/09/2022</p>
      </div>

      <div className="wrapper">
        <span className="check-quiz">
          <p>0</p> Chưa nộp
        </span>
        <span className="check-quiz">
          <p>10</p> Đã nộp
        </span>
      </div>
    </React.Fragment>
  );
}
