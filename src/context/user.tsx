import React, { createContext, useEffect, useState } from "react";

import { Me } from "../services/auth/index";

import * as CONSTANTS from "../utils/constants/constants";

type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "advertiser" | "candidate";
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

type State = {
  user: User | null;
  token: string | null;
};

type UserContext = {
  user: User | null;
  token: string | null;
  updateUser: (user: User, token: string) => void;
  logout: () => void;
  isAdmin: () => boolean;
};

type Props = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContext>({
  user: null,
  token: null,
  updateUser: () => {},
  logout: () => {},
  isAdmin: () => false,
});

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<State>({
    user: null,
    token: null,
  });

  const autoLogin = async () => {
    const token = localStorage.getItem(CONSTANTS.LOCALSTORAGE_TOKEN_KEY);

    if (!token) return cleanUser();

    const { success, user } = await Me({ token });

    if (!success) return cleanUser();

    if (success && user) {
      updateUser(user, token);
    }
  };

  const updateUser = (user: User, token: string) => {
    localStorage.setItem(CONSTANTS.LOCALSTORAGE_TOKEN_KEY, token);
    setState({
      user,
      token,
    });
  };

  const cleanUser = () => {
    localStorage.removeItem(CONSTANTS.LOCALSTORAGE_TOKEN_KEY);

    setState({
      user: null,
      token: null,
    });
  };

  const isAdmin = () => {
    const role = state.user?.role;
    if (!role) {
      return false;
    }
    return CONSTANTS.ADMIN_ONLY.includes(role);
  };

  useEffect(() => {
    if (!state.user) {
      autoLogin();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        token: state.token,
        updateUser,
        logout: cleanUser,
        isAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
