import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../general/Nav/index";
import useLogin from "../../../utils/useLogin/useLogin";

export default function ChangePass() {
  const { account } = useLogin();

  return (
    <React.Fragment>
      <Nav />
      <main>
        <div className="container-profile">
          <div className="profile">
            <div className="title">
              <img src={account.avatar} alt="" />
            </div>
            <div className="info">
              <p>{account.fullName}</p>
              <span className="text-muted">{account.email}</span>
              <br />
              <span className="text-muted">Sinh viên FPT Polytechnic</span>
            </div>
            <div className="link">
              <Link to={"/profile"}>Thông tin</Link>
            </div>
            <div className="link">
              <Link to={"/profileDetail"}>Chỉnh sửa</Link>
            </div>
            <div className="link">
              <Link to={"/changePass"}>Đổi mật khẩu</Link>
            </div>
          </div>
          <div className="profile-details">
            <div className="title">
              <span>Tài khoản của tôi</span>
            </div>
            <form action="/profile">
              <div className="profile-details-body">
                <h6>Thông tin đổi mật khẩu</h6>
                <div className="profile-details-row">
                  <div className="form-input">
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Hãy nhập mật khẩu của bạn."
                      defaultValue="123123123123"
                    />
                  </div>

                  <div className="form-input">
                    <label htmlFor="re-password">Nhập lại mật khẩu</label>
                    <input
                      type="password"
                      id="re-password"
                      placeholder="Hãy nhập nhập lại mật khẩu của bạn."
                      defaultValue="123123123123"
                    />
                  </div>

                  <div className="form-input">
                    <label htmlFor="new-password">Mật khẩu mới</label>
                    <input
                      type="password"
                      id="new-password"
                      placeholder="Hãy nhập mật khẩu mới của bạn."
                      defaultValue="123123123123"
                    />
                  </div>

                  <div className="form-input">
                    <label htmlFor="confirm-password">
                      Xác nhận mật khẩu mới
                    </label>
                    <input
                      type="password"
                      id="onfirm-password"
                      placeholder="Hãy nhập mật khẩu của bạn."
                      defaultValue="123123123123"
                    />
                  </div>
                </div>

                <button type="submit">Đổi mật khẩu</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
