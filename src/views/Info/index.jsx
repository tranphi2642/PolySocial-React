import React from "react";
import "./index.scss";

export default function Info() {
  return (
    <div className="createInfo">
      <form action="/home" className="form-info">
        <div className="profile-details">
          <div className="title">
            <span>Cập nhật tài khoản</span>
          </div>
          <div className="profile-details-body">
            <h6>Thông tin người dùng</h6>
            <div className="profile-details-row">
              <div>
                <div className="form-input">
                  <label htmlFor="avatar">Ảnh</label>
                  <input
                    type="file"
                    id="avatar"
                    accept="image/jpeg, image/png, image/jpg"
                    placeholder="Hãy chọn ảnh của bạn."
                  />
                </div>
                <div id="display-image"></div>
              </div>
              <div>
                <div className="form-input">
                  <label htmlFor="stCode">Mã số sinh viên</label>
                  <input
                    type="text"
                    id="stCode"
                    placeholder="Hãy nhập mã số sinh viên của bạn."
                    defaultValue="PS16509"
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="name">Họ và tên</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Hãy nhập họ và tên của bạn."
                    defaultValue="Trần Mậu Phi"
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="password">Mật khẩu</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Hãy nhập mật khẩu của bạn."
                    defaultValue="******************"
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="comfirm">Xác nhận mật khẩu</label>
                  <input
                    type="password"
                    id="comfirm"
                    placeholder="Hãy nhập lại mật khẩu của bạn."
                    defaultValue="******************"
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Hãy nhập email của bạn."
                    defaultValue="phitmps16509@fpt.edu.vn"
                  />
                </div>
              </div>
            </div>

            <div className="hr"></div>

            <h6>Thông tin liên lạc</h6>
            <div className="profile-details-row">
              <div className="form-input">
                <label htmlFor="birthday">Ngày sinh</label>
                <input type="date" id="birthday" defaultValue="2002-04-26" />
              </div>

              <div className="form-input">
                <label htmlFor="gender">Giới tính</label>
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
                <label htmlFor="major">Chuyên ngành</label>
                <div className="select-box ">
                  <select className="select">
                    <option defaultValue="">Hãy chọn chuyên ngành</option>
                    <option defaultValue="1">Ứng dụng phần mềm</option>
                    <option defaultValue="2">Phát triển phần mềm</option>
                    <option defaultValue="3">Thiết kế website</option>
                    <option defaultValue="4">Lập trình mobile</option>
                    <option defaultValue="5">Thiết kế đồ hoạ</option>
                  </select>
                </div>
              </div>

              <div className="form-input">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Hãy nhập địa chỉ của bạn."
                  defaultValue="Quận 12, TP.Hồ Chí Minh"
                />
              </div>

              <div className="form-input">
                <label htmlFor="major">Khoá</label>
                <input
                  type="text"
                  id="major"
                  placeholder="Hãy nhập khoá của bạn."
                  defaultValue="16.3"
                />
              </div>

              <div className="form-input">
                <label htmlFor="dateCreate">Ngày tạo</label>
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
        </div>
      </form>
    </div>
  );
}
