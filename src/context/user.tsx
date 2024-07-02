import React, { createContext, useEffect, useState } from "react";

import { Me, Login } from "../services/auth/index";

import * as CONSTANTS from "../utils/constants/constants";
import { User } from "../models/user";

type State = {
  user: User | null;
  token: string | null;
};

type LoginData = {
  email: string;
  password: string;
}

type UserContext = {
  user: User | null;
  token: string | null;
  login: (data: LoginData) => Promise<boolean>;
  updateUser: (user: User, token: string) => void;
  logout: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContext>({
  user: null,
  token: null,
  login: async () => false,
  updateUser: () => {},
  logout: () => {},
});

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<State>({
    user: null,
    token: null,
  });

  const login = async (data: LoginData) => {
    const { success, token, user } = await Login(data);

    if (!success) return success;

    if (success && token && user) {
      updateUser(user, token);
    }

    return success
  }

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
        login,
        updateUser,
        logout: cleanUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
