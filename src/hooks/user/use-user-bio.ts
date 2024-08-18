import { useEffect, useState } from "react";
import { GetUser } from "../../services/user";
import { GetSkills } from "../../services/skill";
import { User } from "../../models/user";
import { Skill } from "../../models/skill";

type State = {
  user: undefined | User;
  skills: undefined | Skill[];
};

const INITIAL_STATE = {
  user: undefined,
  skills: undefined,
};

export const useUserBio = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchBio = async () => {
    const { user } = await GetUser({ userId: 1 });
    const { skills } = await GetSkills({});

    setState((prevState) => ({
      ...prevState,
      user: user,
      skills: skills,
    }));
  };

  useEffect(() => {
    fetchBio();
  }, []);

  return {
    user: state.user,
    skills: state.skills,
  };
};
