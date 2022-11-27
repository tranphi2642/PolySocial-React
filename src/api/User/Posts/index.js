import Axios from "../../Axios";

class Posts {
  //API get all groups
  static getAllByAllPost = async () => Axios.get("/api/posts");

  static createPost = async (data) => Axios.postFile("/api/posts", data);
}

export default Posts;
