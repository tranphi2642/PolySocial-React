import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { UilEyeSlash } from "@iconscout/react-unicons";
import "./index.scss";
import useLogin from "../../../utils/useLogin/useLogin";
import Axios from "../../../../api/index";

export default function Login() {
  const { account, setAccount } = useLogin();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [typePassword, setTypePassword] = useState("password");

  const login = async () => {
    const response = await Axios.LoginAPI.loginWithAccount(inputValues);
    console.log(response);
    if (response.status === 200) {
      setAccount(response.data);
      window.location = "/home";
    } else {
      alert(response.data.message);
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    login();
  };

  const hanldeOnChangeInput = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleClickShowPassword = (event) => {
    switch (typePassword) {
      case "text":
        setTypePassword("password");
        break;
      case "password":
        setTypePassword("text");
        break;
      default:
        setTypePassword("password");
    }
  };

  if (account) {
    return <Navigate to="/home" replace={true} />;
  }
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
            <form onSubmit={handleOnSubmit}>
              <div className="field input-field">
                <input
                  type="email"
                  name="email"
                  className="input"
                  onChange={hanldeOnChangeInput}
                  placeholder="Email"
                />
              </div>
              <div className="field input-field">
                <input
                  type={typePassword}
                  name="password"
                  className="password"
                  onChange={hanldeOnChangeInput}
                  placeholder="Mật khẩu"
                />
                <i className="eye-icon">
                  <UilEyeSlash onClick={handleClickShowPassword} />
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
