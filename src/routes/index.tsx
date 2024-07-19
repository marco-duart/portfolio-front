import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "../components/base-layout";
import AdminLayout from "../components/admin-layout"
import { Home, Login, Profile, Portfolio } from "../pages";


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/login" Component={Login}/>
        <Route Component={BaseLayout}>
          <Route path="/" Component={Home} />
        </Route>
        <Route Component={AdminLayout}>
          <Route path="/admin/profile" Component={Profile} />
          <Route path="/admin/portfolio" Component={Portfolio} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
