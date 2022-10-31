import React, { useState } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { UilEyeSlash } from "@iconscout/react-unicons";
import "./index.scss";

export default function Login() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
            <form action="/info">
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  defaultValue={"phitmps16509@fpt.edu.vn"}
                />
              </div>
              <div className="field input-field">
                <input
                  placeholder="Mật khẩu"
                  className="password"
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                />
                <i className="eye-icon">
                  <UilEyeSlash
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  />
                </i>
              </div>
              <div className="link-field">
                <Link to={"/forgotPass"}>Quên mật khẩu ?</Link>
              </div>
              <div className="field button-field">
                <button type="submit">Đăng nhập</button>
              </div>
            </form>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <Link className="field google">
              <img
                src="https://dd7tel2830j4w.cloudfront.net/f1633714040959x202707873005269600/Google__G__Logo.svg.png"
                alt=""
                className="google-img"
              />
              <span>Đăng nhập bằng Google</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
