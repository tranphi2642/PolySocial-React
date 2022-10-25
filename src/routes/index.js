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
];

const privateRouters = [];

export { publicRouters, privateRouters };
