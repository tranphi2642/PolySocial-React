import Login from "../views/Login/index.jsx";
import Info from "../views/Info/index.jsx";
import Home from "../views/Home/index.jsx";
import Profile from "../views/Profile/index.jsx";
import ProfileDetail from "../views/ProfileDetail/index.jsx";
import Page from "../views/Page/index.jsx";
import PageDetail from "../views/PageDetail/index.jsx";
import PagePeople from "../views/PagePeople/index.jsx";
import PageQuiz from "../views/PageQuiz/index.jsx";
import PageQuizDetail from "../views/PageQuizDetail/index.jsx";
import Messages from "../components/Messages/index.jsx";
import Admin from "../views/Admin/Home/index.jsx";
import Revenus from "../views/Admin/Revenus/index.jsx";
import Accounts from "../views/Admin/Accounts/index.jsx";
import Groups from "../views/Admin/Groups/index.jsx";
import Contents from "../views/Admin/Contents/index.jsx";
import Likes from "../views/Admin/Likes/index.jsx";
import Comments from "../views/Admin/Comments/index.jsx";

const publicRouters = [
  {
    path: "/",
    component: Login,
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
    path: "/profile",
    component: Profile,
  },
  {
    path: "/profileDetail",
    component: ProfileDetail,
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
