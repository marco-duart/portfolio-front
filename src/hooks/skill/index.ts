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
import { CreateSkillData, DeleteSkillData, UpdateSkillData } from "../../assets/@types/global";

type State = {
  skills: undefined | Skill[];
};

const INITIAL_STATE = {
  skills: undefined,
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
