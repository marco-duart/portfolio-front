import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import BaseLayout from "../components/base-layout";
import Home from "../pages/home";


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route Component={BaseLayout}>
          <Route path="/home" Component={Home} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
