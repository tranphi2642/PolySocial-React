import React from "react";
import NavAdmin from "../../../components/Admin/Nav/index";
import {
  UilBars,
  UilTachometerFastAlt,
  UilSearch,
} from "@iconscout/react-unicons";

import avatar from "../../../assets/images/1.jpg";

export default function index() {
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
              Thống kê lượt bình luận
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
                <option value="" selected>
                  Lọc theo
                </option>
                <option value="1">Họ và tên</option>
                <option value="2">Email</option>
                <option value="3">Bài bình luận</option>
              </select>
            </div>
          </form>

          <table className="styled-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Họ và tên</th>
                <th>Trạng thái</th>
                <th>Bài bình luận</th>
                <th>Ngày bình luận</th>
              </tr>
            </thead>
            <tbody className="body">
              <tr className="active-row">
                <td>PS16509</td>
                <td>Trần Mậu Phi</td>
                <td>Đã bình luận</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16501</td>
                <td>Phan Nguyễn Đăng Trường</td>
                <td>Đã bình luận</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16445</td>
                <td>Đặng Hoàng DUy</td>
                <td>Đã bình luận</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS14579</td>
                <td>Nguyễn Nhật Cao Thăng</td>
                <td>Đã bình luận</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16500</td>
                <td>Võ Thanh Nhã</td>
                <td>Đã bình luận</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16590</td>
                <td>Lê Duy Tiến</td>
                <td>Đã bình luận</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16501</td>
                <td>Phan Nguyễn Đăng Trường</td>
                <td>Đã bình luận</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16445</td>
                <td>Đặng Hoàng DUy</td>
                <td>Đã bình luận</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS14579</td>
                <td>Nguyễn Nhật Cao Thăng</td>
                <td>Đã bình luận</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16500</td>
                <td>Võ Thanh Nhã</td>
                <td>Đã bình luận</td>
                <td>BV001</td>
                <td>23/09/2022</td>
              </tr>
              <tr>
                <td>PS16590</td>
                <td>Lê Duy Tiến</td>
                <td>Đã bình luận</td>
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
