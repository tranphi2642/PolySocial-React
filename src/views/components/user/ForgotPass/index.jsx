import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPass() {
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
              <label htmlFor="email">Hãy nhập email của bạn để xác minh</label>
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  defaultValue={"phitmps16509@fpt.edu.vn"}
                />
              </div>
              <div className="link-field">
                <Link to={"/forgotPassOTP"}>Gửi mã OTP ?</Link>
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
