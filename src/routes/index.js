import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
//Public Routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/follow", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: null },
  { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
