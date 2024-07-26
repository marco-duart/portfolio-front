import { useEffect, useState } from "react";

import { useUserContext } from "../../hooks/user/use-user-context";
import {
  DeleteSkill,
  GetSkills,
  CreateSkill,
  UpdateSkill,
  GetSkill,
} from "../../services/skill/index";
import { Skill } from "../../models/skill";
import { SkillLevelEnum } from "../../utils/enums/skill-level.enum";

type State = {
  skills: undefined | Skill[];
};

const INITIAL_STATE = {
  skills: undefined,
};

export type CreateSkillData = {
  resumeId: number;
  name: string;
  level: SkillLevelEnum;
};

export type UpdateSkillData = {
  skillId: number;
  resumeId: number;
  name: string;
  level: SkillLevelEnum;
};

export type DeleteSkillData = {
  skillId: number;
};

export const useSkillCrud = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);
  const { token } = useUserContext();

  const fetchSkills = async () => {
    const { skills } = await GetSkills({ token });
    setState({ skills });
  };

  const createSkill = async (data: CreateSkillData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await CreateSkill(params);
    fetchSkills();
  };

  const deleteSkill = async (data: DeleteSkillData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await DeleteSkill(params);
    fetchSkills();
  };

  const updateSkill = async (data: UpdateSkillData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await UpdateSkill(params);
    fetchSkills();
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return {
    skills: state.skills,
    createSkill,
    deleteSkill,
    updateSkill,
  };
};
