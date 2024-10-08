import { useContext } from "react";
import { UserContext } from "../../context/user";


export const useUserContext = () => useContext(UserContext)