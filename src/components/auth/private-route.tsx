//NATIVE
//LIBRARIES
import { Navigate } from "react-router-dom";

//COMPONENTS
import { useUserContext } from "../../hooks/user/use-user-context";

//STYLES
//UTILS

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo: string;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo,
}) => {
  const { user } = useUserContext();

  return user ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
};
