//NATIVE
//LIBRARIES
import { Outlet } from "react-router-dom";

//COMPONENTS
import Footer from "../common/footer";

//STYLES
import * as S from "./styles";
import Sidebar from "../common/sidebar";

//UTILS

const AdminLayout = () => {
  return (
    <S.Container>
        <Sidebar />
      <S.RightSide>
          <Outlet />
          <Footer />
      </S.RightSide>
    </S.Container>
  );
};

export default AdminLayout;
