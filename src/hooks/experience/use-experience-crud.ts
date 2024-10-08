import { useEffect, useState } from "react";
import { useUserContext } from "../user/use-user-context";
import {
  DeleteExperience,
  GetExperiences,
  CreateExperience,
  UpdateExperience,
  GetExperience,
} from "../../services/experience/index";
import { Experience } from "../../models/experience";
import { CreateExperienceData, DeleteExperienceData, UpdateExperienceData } from "../../assets/@types/global";

type State = {
  experiences: undefined | Experience[];
};

const INITIAL_STATE = {
  experiences: undefined,
};



export const useExperienceCrud = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);
  const { token } = useUserContext();

  const fetchExperiences = async () => {
    const { experiences } = await GetExperiences({ token });
    setState({ experiences });
  };

  const createExperience = async (data: CreateExperienceData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await CreateExperience(params);
    fetchExperiences();
  };

  const deleteExperience = async (data: DeleteExperienceData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await DeleteExperience(params);
    fetchExperiences();
  };

  const updateExperience = async (data: UpdateExperienceData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await UpdateExperience(params);
    fetchExperiences();
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return {
    experiences: state.experiences,
    createExperience,
    deleteExperience,
    updateExperience,
  };
};
