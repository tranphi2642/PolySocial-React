const sessionToken = `${sessionStorage.getItem("account")}`;
const dataToken = JSON.parse(sessionToken) ? JSON.parse(sessionToken) : "";

const CONFIG = {
  URL: "http://localhost:8080",
  HEADERS: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: dataToken.token,
  },
};

export default CONFIG;
