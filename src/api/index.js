import Accounts from "./Admin/Accounts";
import LoginAPI from "./LoginAPI";
import Groups from "./Admin/Groups";
import Posts from "./User/Posts";
import Comments from "./User/Comments/index.js";
import Likes from "./User/Likes";
import Friends from "./User/Friends";

const Axios = { Accounts, LoginAPI, Groups, Posts, Comments, Likes, Friends };

export default Axios;
