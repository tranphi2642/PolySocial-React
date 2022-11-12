import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassOTP() {
  return (
    <div>
      <section className="login">
        <div className="form">
          <div className="form-content">
            <header className="img">
              <img
                src="https://img5.thuthuatphanmem.vn/uploads/2022/01/16/logo-fpt-fpt-polytechnic-tach-nen_043151201.png"
                alt=""
              />
            </header>
            <form action="/">
              <label htmlFor="email">Hãy nhập OTP của bạn để xác minh</label>
              <div className="field input-field">
                <input
                  type="text"
                  className="input"
                  defaultValue={"12312312"}
                />
              </div>
              <div className="link-field">
                <Link to={"/login"}>Bạn có muốn đăng nhập ?</Link>
              </div>
              <div className="field button-field">
                <button type="submit">Kiểm tra</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
