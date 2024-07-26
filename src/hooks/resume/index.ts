import { useEffect, useState } from "react";

import { useUserContext } from "../../hooks/user/use-user-context";
import {
  DeleteResume,
  CreateResume,
  UpdateResume,
  GetResume,
} from "../../services/resume/index";
import { Resume } from "../../models/resume";

type State = {
  resume: undefined | Resume;
};

const INITIAL_STATE = {
  resume: undefined,
};

export type CreateResumeData = {
  userId: number;
  title: string;
  summary: string;
};

export type UpdateResumeData = {
  resumeId: number;
  title: string;
  summary: string;
};

export type DeleteResumeData = {
  resumeId: number;
};

export const useResumeCrud = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);
  const { token, user } = useUserContext();

  const fetchResume = async () => {
    if (!user) {
      return;
    }

    const { resume } = await GetResume({ userId: user.id });
    setState({ resume });
  };

  const createResume = async (data: CreateResumeData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await CreateResume(params);
    fetchResume();
  };

  const deleteResume = async (data: DeleteResumeData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await DeleteResume(params);
    fetchResume();
  };

  const updateResume = async (data: UpdateResumeData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await UpdateResume(params);
    fetchResume();
  };

  useEffect(() => {
    fetchResume();
  }, []);

  return {
    resume: state.resume,
    createResume,
    deleteResume,
    updateResume,
  };
};
