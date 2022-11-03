import AxiosClient from "../AxiosClient";

const PostApi = {
  
  getAllByAllPost: (params) => {
    const url = "/posts";
    return AxiosClient.get(url, { params });
  },
  
  createPost: (data) => {
    const url = "/posts";
    
    return AxiosClient.post(url,data);
  },

  upLoadFile: (data)=>{
    const url = "/posts/upload";
    return AxiosClient.postFile(url,data);
  }
};

export default PostApi;
