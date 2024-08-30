import { useEffect, useState } from "react";
import { GetUser } from "../../services/user";
import { GetSkills } from "../../services/skill";
import { GetEducations } from "../../services/education";
import { GetExperiences } from "../../services/experience";
import { GetPortfolioItems } from "../../services/portfolio";
import {
  User,
  Skill,
  Education,
  Experience,
  PortfolioItem,
  PortfolioPhoto,
} from "../../models";

type State = {
  user: undefined | User;
  skills: undefined | Skill[];
  educations: undefined | Education[];
  experiences: undefined | Experience[];
  portfolioItems: undefined | (PortfolioItem & { photos: PortfolioPhoto[] })[];
};

const INITIAL_STATE = {
  user: undefined,
  skills: undefined,
  educations: undefined,
  experiences: undefined,
  portfolioItems: undefined,
};

export const useUserBio = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchBio = async () => {
    const { user } = await GetUser({ userId: 1 });
    const { skills } = await GetSkills({});
    const { educations } = await GetEducations({});
    const { experiences } = await GetExperiences({});
    const { portfolioItems } = await GetPortfolioItems({});

    setState((prevState) => ({
      ...prevState,
      user,
      skills,
      educations,
      experiences,
      portfolioItems,
    }));
  };

  useEffect(() => {
    fetchBio();
  }, []);

  return {
    user: state.user,
    skills: state.skills,
    educations: state.educations,
    experiences: state.experiences,
  };
};
