import Axios from "./Axios";

class Login {
  static loginWithAccount = ({ email, password }) =>
    Axios.post("http://localhost:8080/api/login-account", { email, password });
}

export default Login;
