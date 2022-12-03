import Axios from "../../Axios";

class Messages {
  //API get all message
  static getMessage = async (data) => Axios.post("/api/getMessage",data);

  static createMessage = async (data) => Axios.post("/api/createMessage", data);

  static updateviewedStatus = async (data) => Axios.post("/api/updateViewedStatus", data);
  
}

export default Messages;
