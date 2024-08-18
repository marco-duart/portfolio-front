import { useEffect, useState } from "react";
import { GetUser } from "../../services/user";

import { User } from "../../models/user";

type State = {
  user: undefined | User;
};

const INITIAL_STATE = {
    user: undefined,
};

export const useUserBio = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchUser = async () => {
    const { user } = await GetUser({ userId: 1 });

    setState((prevState) => ({
      ...prevState,
      user: user,
    }));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user: state.user,
  };
};
