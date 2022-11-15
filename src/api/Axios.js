import Config from "./config";
import axios from "axios";

class Axios {
  static async post(url, data, headers) {
    const response = await axios
      .post(`${Config.URL}${url}`, data, {
        headers: {
          ...headers,
          ...Config.HEADERS,
        },
      })
      .then((result) => result)
      .catch((error) => error.response);
      console.log("resp>",response)

    return response;
  }

  static async postLogin(url, data, headers) {
    console.log('login',data)
    const response = await axios
      .post(url, data, {
        headers: {
          ...headers,
          ...Config.HEADERS,
        },
      })
      .then((result) => result)
      .catch((error) => error.response);
      console.log("resp123->",response)

    return response;
  }

  static async postFile(url, data, headers) {
    const response = await axios
      .post(`${Config.URL}${url}`,data ,{
        headers: {
          ...headers,
          ...Config.HEADERS,
          ...{ "Content-Type": "multipart/form-data" },
        },
      })
      .catch((e) => {
        throw Error(e.response.data.message);
      }); 
      console.log("resp->",response)
    return response.data;
  }

  static async get(url, headers) {
    console.log('index')
    const response = await axios
      .get(`${Config.URL}${url}`, {
        headers: {
          ...headers,
          ...Config.HEADERS,
        },
      })
      .then((result) => result)
      .catch((error) => error.response);
      console.log('index',response.data)
    return response.data;
  }

  static async put(url, data, headers) {
    const response = await axios
      .put(`${Config.URL}${url}`, data, {
        headers: {
          ...headers,
          ...Config.HEADERS,
        },
      })
      .then((result) => result)
      .catch((error) => error.response);

    return response.data;
  }

  static async delete(url, headers) {
    const response = await axios
      .delete(`${Config.URL}${url}`, {
        headers: {
          ...headers,
          ...Config.HEADERS,
        },
      })
      .then((result) => result)
      .catch((error) => error.response);

    return response.data;
  }
}

export default Axios;
