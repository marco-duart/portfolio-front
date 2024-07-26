import { useEffect, useState } from "react";
import { useUserContext } from "../../hooks/user/use-user-context";
import {
  DeleteEducation,
  GetEducations,
  CreateEducation,
  UpdateEducation,
  GetEducation,
} from "../../services/education/index";
import { Education } from "../../models/education";
import { CreateEducationData, DeleteEducationData, UpdateEducationData } from "../../assets/@types/global";

type State = {
  educations: undefined | Education[];
};

const INITIAL_STATE = {
  educations: undefined,
};

export const useEducationCrud = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);
  const { token } = useUserContext();

  const fetchEducations = async () => {
    const { educations } = await GetEducations({});
    setState({ educations });
  };

  const createEducation = async (data: CreateEducationData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await CreateEducation(params);
    fetchEducations();
  };

  const deleteEducation = async (data: DeleteEducationData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await DeleteEducation(params);
    fetchEducations();
  };

  const updateEducation = async (data: UpdateEducationData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await UpdateEducation(params);
    fetchEducations();
  };

  useEffect(() => {
    fetchEducations();
  }, []);

  return {
    educations: state.educations,
    createEducation,
    deleteEducation,
    updateEducation,
  };
};
