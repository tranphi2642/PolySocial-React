import React from "react";
import NavAdmin from "../../../components/Admin/Nav/index";
import {
  UilBars,
  UilTachometerFastAlt,
  UilSearch,
} from "@iconscout/react-unicons";

import avatar from "../../../assets/images/1.jpg";

export default function Likes() {
  return (
    <React.Fragment>
      <NavAdmin />
      <section className="dashboard">
        <div className="top">
          <i>
            <UilBars />
          </i>

          <div className="info">
            <span>Trần Phi</span>
            <img src={avatar} alt="" />
          </div>
        </div>

        <div className="dash-content">
          <div className="title-1">
            <span>
              <i>
                <UilTachometerFastAlt />
              </i>{" "}
              Thống kê lượt yêu thích
            </span>
          </div>

          <form action="#">
            <div className="search-box">
              <i>
                <UilSearch />
              </i>
              <input type="text" placeholder="Tìm kiếm ở đây" />
            </div>
            <div className="select-box">
              <select className="select">
                <option defaultValue="" defaultChecked>
                  Lọc theo
                </option>
                <option defaultValue="1">Họ và tên</option>
                <option defaultValue="2">Email</option>
                <option defaultValue="3">Bài yêu thích</option>
              </select>
            </div>
          </form>

          <table className="styled-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Họ và tên</th>
                <th>Trạng thái</th>
                <th>Bài viết</th>
                <th>Ngày yêu thích</th>
              </tr>
            </thead>
            <tbody className="body">
              <tr className="active-row">
                <td>PS16509</td>
                <td>Trần Mậu Phi</td>
                <td>Đã yêu thích</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16501</td>
                <td>Phan Nguyễn Đăng Trường</td>
                <td>Đã yêu thích</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16445</td>
                <td>Đặng Hoàng DUy</td>
                <td>Đã yêu thích</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS14579</td>
                <td>Nguyễn Nhật Cao Thăng</td>
                <td>Đã yêu thích</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16500</td>
                <td>Võ Thanh Nhã</td>
                <td>Đã yêu thích</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16590</td>
                <td>Lê Duy Tiến</td>
                <td>Đã yêu thích</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16501</td>
                <td>Phan Nguyễn Đăng Trường</td>
                <td>Đã yêu thích</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16445</td>
                <td>Đặng Hoàng DUy</td>
                <td>Đã yêu thích</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS14579</td>
                <td>Nguyễn Nhật Cao Thăng</td>
                <td>Đã yêu thích</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16500</td>
                <td>Võ Thanh Nhã</td>
                <td>Đã yêu thích</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16590</td>
                <td>Lê Duy Tiến</td>
                <td>Đã yêu thích</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </React.Fragment>
  );
}
