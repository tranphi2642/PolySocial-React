import Config from "./config";
import axios from "axios";

class AxiosClient {
  static async post(url, data, headers) {
    const posts = JSON.stringify({
      content: data,
    });
    const response = await axios
      .post(`${Config.URL}${url}`, posts ,{
        headers: {
          ...headers,
          Authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjY3NDAxOTA0LCJleHAiOjE2NjgwMDY3MDR9.17UnVCho1Aey0QjZC_V5FhjOANwv54r8Y9O6JcLEr-oXK6QWZGKqanfYbumjTNkLs3tORxg99igFRm-Ew6fPiw",
          ...Config.HEADERS,
        },
      })
      .catch((e) => {
        throw Error(e.response.data.message);
      });

    return response.data;
  }

  // static async postFile(url, data, headers) {
  //   const response = await axios
  //     .post(`${Config.URL}${url}`,data ,{
  //       headers: {
  //         ...headers,
  //         Authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjY3NDAxOTA0LCJleHAiOjE2NjgwMDY3MDR9.17UnVCho1Aey0QjZC_V5FhjOANwv54r8Y9O6JcLEr-oXK6QWZGKqanfYbumjTNkLs3tORxg99igFRm-Ew6fPiw",
  //         ...{ "Content-Type": "multipart/form-data" },
  //       },
  //     })
  //     .catch((e) => {
  //       throw Error(e.response.data.message);
  //     }); 
  //     console.log("resp->",response)
  //   return response.data;
  // }

  
  static async get(url, headers) {
    const response = await axios
      .get(`${Config.URL}${url}`, {
        headers: {
          ...headers,
          ...Config.HEADERS,
        },
      })
      .catch((e) => {
        throw Error(e.response.data.message);
      });
    return response.data;
  }

  // static async put(url, data, headers) {
  //   const response = await axios
  //     .put(`${Config.URL}${url}`, data, {
  //       headers: {
  //         ...headers,
  //         ...Config.HEADERS,
  //       },
  //     })
  //     .catch((e) => {
  //       throw Error(e.response.data.message);
  //     });

  //   return response.data.data;
  // }

  // static async delete(url, headers) {
  //   const response = await axios
  //     .delete(`${Config.URL}${url}`, {
  //       headers: {
  //         ...headers,
  //         ...Config.HEADERS,
  //       },
  //     })
  //     .catch((e) => {
  //       throw Error(e.response.data.message);
  //     });

  //   return response.data.data;
  // }
}

export default AxiosClient;
