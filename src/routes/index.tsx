import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
