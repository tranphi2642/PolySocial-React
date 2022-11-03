import Login from "./../views/components/user/Login/index.jsx";
import Info from "./../views/components/user/Info/index.jsx";
import Home from "./../views/components/user/Home/index.jsx";
import Profile from "./../views/components/user/Profile/index.jsx";
import ProfileDetail from "./../views/components/user/ProfileDetail/index.jsx";
import Page from "./../views/components/user/Page/index.jsx";
import PageDetail from "./../views/components/user/PageDetail/index.jsx";
import PagePeople from "./../views/components/user/PagePeople/index.jsx";
import PageQuiz from "./../views/components/user/PageQuiz/index.jsx";
import PageQuizDetail from "./../views/components/user/PageQuizDetail/index.jsx";
import Messages from "./../components/Messages/index.jsx";
import Admin from "./../views/components/admin/Home/index.jsx";
import Revenus from "./../views/components/admin/Revenus/index.jsx";
import Accounts from "./../views/components/admin/Accounts/index.jsx";
import Groups from "./../views/components/admin/Groups/index.jsx";
import Contents from "./../views/components/admin/Contents/index.jsx";
import Likes from "./../views/components/admin/Likes/index.jsx";
import Comments from "./../views/components/admin/Comments/index.jsx";
import GroupDetails from "./../views/components/admin/GroupDetails/index.jsx";
import ForgotPass from "./../views/components/user/ForgotPass/index.jsx";
import ChangePass from "./../views/components/user/ChangePass/index.jsx";
import ForgotPassOTP from "../views/components/user/ForgotPassOTP/index.jsx";
import FeedBack from "../views/components/user/FeedBack/index.jsx";

const publicRouters = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/forgotPass",
    component: ForgotPass,
  },
  {
    path: "/forgotPassOTP",
    component: ForgotPassOTP,
  },
  {
    path: "/info",
    component: Info,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/feedback",
    component: FeedBack,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/profileDetail",
    component: ProfileDetail,
  },
  {
    path: "/changePass",
    component: ChangePass,
  },
  {
    path: "/page",
    component: Page,
  },
  {
    path: "/pageDetail",
    component: PageDetail,
  },
  {
    path: "/pagePeoples",
    component: PagePeople,
  },
  {
    path: "/pageQuizs",
    component: PageQuiz,
  },
  {
    path: "/pageQuizsDetails",
    component: PageQuizDetail,
  },
  {
    path: "/messages",
    component: Messages,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/admin/revenus",
    component: Revenus,
  },
  {
    path: "/admin/accounts",
    component: Accounts,
  },
  {
    path: "/admin/groups",
    component: Groups,
  },
  {
    path: "/admin/groupDetails",
    component: GroupDetails,
  },
  {
    path: "/admin/contents",
    component: Contents,
  },
  {
    path: "/admin/likes",
    component: Likes,
  },
  {
    path: "/admin/comments",
    component: Comments,
  },
];

const privateRouters = [];

export { publicRouters, privateRouters };
