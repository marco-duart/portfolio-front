import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BaseLayout from "../components/base-layout";
import AdminLayout from "../components/admin-layout";
import { Home, Login, Profile, Portfolio, Resume } from "../pages";
import { PrivateRoute } from "../components/auth/private-route";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<BaseLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/curriculum" element={<Resume />} />
        </Route>
        <Route
          element={
            <PrivateRoute redirectTo="/home">
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
