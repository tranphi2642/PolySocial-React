import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/index";

import avatar from "../../assets/images/1.jpg";

export default function Profile() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <div className="container-profile">
          <div className="profile">
            <div className="title">
              <img src={avatar} alt="" />
            </div>
            <div className="info">
              <p>Trần Phi</p>
              <span className="text-muted">phitmps16509@fpt.edu.vn</span>
              <br />
              <span className="text-muted">Sinh viên FPT Polytechnic</span>
            </div>
            <div className="link">
              <Link to={"/profile"}>Thông tin</Link>
            </div>
          </div>
          <div className="profile-details">
            <div className="title">
              <span>Tài khoản của tôi</span>
            </div>
            <form action="/profile">
              <div className="profile-details-body">
                <h6>Thông tin người dùng</h6>
                <div className="profile-details-row">
                  <div className="form-input">
                    <label for="avatar">Ảnh</label>
                    <input
                      type="file"
                      id="avatar"
                      placeholder="Hãy chọn ảnh của bạn."
                    />
                  </div>

                  <div className="form-input">
                    <label for="stCode">Mã số sinh viên</label>
                    <input
                      type="text"
                      id="stCode"
                      placeholder="Hãy nhập mã số sinh viên của bạn."
                      defaultValue="PS16509"
                    />
                  </div>

                  <div className="form-input">
                    <label for="name">Họ và tên</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Hãy nhập họ và tên của bạn."
                      defaultValue="Trần Mậu Phi"
                    />
                  </div>

                  <div className="form-input">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Hãy nhập email của bạn."
                      defaultValue="phitmps16509@fpt.edu.vn"
                    />
                  </div>
                </div>

                <div className="hr"></div>

                <h6>Thông tin liên lạc</h6>
                <div className="profile-details-row">
                  <div className="form-input">
                    <label for="birthday">Ngày sinh</label>
                    <input
                      type="date"
                      id="birthday"
                      defaultValue="2002-04-26"
                    />
                  </div>

                  <div className="form-input">
                    <label for="gender">Giới tính</label>
                    <div className="gender">
                      <div>
                        <input
                          type="radio"
                          name="gender"
                          id="gender"
                          defaultValue="true"
                        />
                        <span className="checkmark">Nam</span>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="gender"
                          id="gender"
                          defaultValue="false"
                        />
                        <span className="checkmark">Nữ</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-input">
                    <label for="major">Chuyên ngành</label>
                    <div className="select-box ">
                      <select className="select">
                        <option value="" selected>
                          Hãy chọn chuyên ngành
                        </option>
                        <option value="1">Ứng dụng phần mềm</option>
                        <option value="2">Phát triển phần mềm</option>
                        <option value="3">Thiết kế website</option>
                        <option value="4">Lập trình mobile</option>
                        <option value="5">Thiết kế đồ hoạ</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-input">
                    <label for="address">Địa chỉ</label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Hãy nhập địa chỉ của bạn."
                      defaultValue="Quận 12, TP.Hồ Chí Minh"
                    />
                  </div>

                  <div className="form-input">
                    <label for="major">Khoá</label>
                    <input
                      type="text"
                      id="major"
                      placeholder="Hãy nhập khoá của bạn."
                      defaultValue="16.3"
                    />
                  </div>

                  <div className="form-input">
                    <label for="dateCreate">Ngày tạo</label>
                    <input
                      type="date"
                      id="dateCreate"
                      placeholder="Hãy nhập ngày tạo của bạn."
                      defaultValue="2022-10-01"
                    />
                  </div>
                </div>
                <button type="submit">Cập nhật</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
