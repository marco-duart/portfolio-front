import { useEffect, useState } from "react";
import { GetResume } from "../../services/resume/index";
import { GetEducations } from "../../services/education/index";
import { GetExperiences } from "../../services/experience/index";
import { GetSkills } from "../../services/skill/index";

import { Resume } from "../../models/resume";
import { Education } from "../../models/education";
import { Experience } from "../../models/experience";
import { Skill } from "../../models/skill";

type State = {
  resume: undefined | Resume;
  educations: undefined | Education[];
  experiences: undefined | Experience[];
  skills: undefined | Skill[];
};

const INITIAL_STATE = {
  resume: undefined,
  educations: undefined,
  experiences: undefined,
  skills: undefined,
};

export const useProfile = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchResume = async () => {
    const { resume } = await GetResume({ userId: 1 });

    setState((prevState) => ({
      ...prevState,
      resume: resume,
    }));
  };

  const fetchEducation = async () => {
    const { educations } = await GetEducations({});

    setState((prevState) => ({ ...prevState, educations }));
  };

  const fetchExperience = async () => {
    const { experiences } = await GetExperiences({});

    setState((prevState) => ({
      ...prevState,
      experiences: experiences,
    }));
  };

  const fetchSkills = async () => {
    const { skills } = await GetSkills({});

    setState((prevState) => ({
      ...prevState,
      skills: skills,
    }));
  };

  useEffect(() => {
    fetchResume();
    fetchEducation();
    fetchExperience();
    fetchSkills();
  }, []);

  return {
    profile: state,
  };
};
