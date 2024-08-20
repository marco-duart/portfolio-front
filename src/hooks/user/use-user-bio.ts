import { useEffect, useState } from "react";
import { GetUser } from "../../services/user";
import { GetSkills } from "../../services/skill";
import { GetPortfolioItems } from "../../services/portfolio";
import { User } from "../../models/user";
import { Skill } from "../../models/skill";
import { PortfolioItem } from "../../models/portfolio-item";
import { PortfolioPhoto } from "../../models/portfolio-photo";

type State = {
  user: undefined | User;
  skills: undefined | Skill[];
  portfolioItems: undefined | (PortfolioItem & { photos: PortfolioPhoto[] })[];
};

const INITIAL_STATE = {
  user: undefined,
  skills: undefined,
  portfolioItems: undefined,
};

export const useUserBio = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchBio = async () => {
    const { user } = await GetUser({ userId: 1 });
    const { skills } = await GetSkills({});
    const { portfolioItems } = await GetPortfolioItems({});

    setState((prevState) => ({
      ...prevState,
      user,
      skills,
      portfolioItems,
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
