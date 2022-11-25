import React from "react";
import NavAdmin from "../../general/NavAdmin/index";
import useLogin from "../../../utils/useLogin/useLogin";
import {
  UilBars,
  UilSearch,
  UilTachometerFastAlt,
  UilThumbsUp,
  UilComments,
  UilShare,
  UilClockThree,
} from "@iconscout/react-unicons";

import "./index.scss";

export default function Admin() {
  const { account } = useLogin();

  return (
    <React.Fragment>
      <NavAdmin />
      <section className="dashboard">
        <div className="top">
          <i>
            <UilBars />
          </i>

          <div className="search-box">
            <i>
              <UilSearch />
            </i>
            <input type="text" placeholder="Tìm kiếm ở đây" />
          </div>

          <div className="info">
            <span>{account.fullName}</span>
            <img src={account.avatar} alt="" />
          </div>
        </div>

        <div className="dash-content">
          <div className="overview">
            <div className="title">
              <i>
                <UilTachometerFastAlt />
              </i>
              <span className="text">Trang chủ</span>
            </div>

            <div className="boxes">
              <div className="box box1">
                <i>
                  <UilThumbsUp />
                </i>
                <span className="text">Tổng lượt thích</span>
                <span className="number">50,120</span>
              </div>
              <div className="box box2">
                <i>
                  <UilComments />
                </i>
                <span className="text">Tổng lượt bình luận</span>
                <span className="number">20,120</span>
              </div>
              <div className="box box3">
                <i>
                  <UilShare />
                </i>
                <span className="text">Tổng lượt chia sẻ</span>
                <span className="number">10,120</span>
              </div>
            </div>
          </div>

          <div className="activity">
            <div className="title">
              <i>
                <UilClockThree />
              </i>
              <span className="text">Lịch sử hoạt động</span>
            </div>

            <div className="activity-data">
              <div className="data names">
                <span className="data-title">Họ và tên</span>
                <span className="data-list">Trần Phi</span>
                <span className="data-list">Đăng Trường</span>
                <span className="data-list">Cao Thăng</span>
                <span className="data-list">Hoàng Duy</span>
              </div>
              <div className="data email">
                <span className="data-title">Email</span>
                <span className="data-list">phitmps16509@fpt.edu.vn</span>
                <span className="data-list">truongpndps16501@fpt.edu.vn</span>
                <span className="data-list">thangnncps14579@fpt.edu.vn</span>
                <span className="data-list">duyhdps16445@fpt.edu.vn</span>
              </div>
              <div className="data joined">
                <span className="data-title">Ngày tham gia</span>
                <span className="data-list">2022-02-12</span>
                <span className="data-list">2022-02-12</span>
                <span className="data-list">2022-02-13</span>
                <span className="data-list">2022-02-13</span>
              </div>
              <div className="data type">
                <span className="data-title">Loại</span>
                <span className="data-list">New</span>
                <span className="data-list">Member</span>
                <span className="data-list">Member</span>
                <span className="data-list">New</span>
              </div>
              <div className="data status">
                <span className="data-title">Thông báo</span>
                <span className="data-list">Liked</span>
                <span className="data-list">Liked</span>
                <span className="data-list">Liked</span>
                <span className="data-list">Liked</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
