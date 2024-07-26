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
import { EducationDegreeEnum } from "../../utils/enums/education-degree.enum";

type State = {
  educations: undefined | Education[];
};

const INITIAL_STATE = {
  educations: undefined,
};

export type CreateEducationData = {
  resumeId: number;
  institutionName: string;
  degree: EducationDegreeEnum;
  startDate: Date;
  endDate: Date;
  description: string;
};

export type UpdateEducationData = {
  educationId: number;
  resumeId: number;
  institutionName: string;
  degree: EducationDegreeEnum;
  startDate: Date;
  endDate: Date;
  description: string;
};

export type DeleteEducationData = {
  educationId: number;
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
