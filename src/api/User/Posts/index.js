import Axios from "../../Axios";

class Posts {
  //API get all groups
  static getAllByAllPost = async () =>
    Axios.get("/api/posts");

    static createPost = async (data)=>
    Axios.post('/api/posts',data);

    static upLoadFile = async (data)=>
    Axios.postFile('/api/posts/upload',data);
}

export default Posts;
