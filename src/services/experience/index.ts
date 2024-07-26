import { isAxiosError } from "axios";
import api from "../api";
import {
  GetExperienceDTO,
  GetExperiencesDTO,
  CreateExperienceDTO,
  UpdateExperienceDTO,
  DeleteExperienceDTO,
} from "./DTO";

export const GetExperience = async (params: GetExperienceDTO.IParams) => {
  try {
    const { experienceId } = params;
    const response = await api.get<GetExperienceDTO.IResponse>(
      `/experiences/${experienceId}`,
    );

    
    return {
      success: true,
      message: "MESSAGE",
      experience: response.data.experience,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      success: false,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};

export const GetExperiences = async (params: GetExperiencesDTO.IParams) => {
  try {
    const response = await api.get<GetExperiencesDTO.IResponse>(
      "/experiences",
    );

    return {
      success: true,
      message: "MESSAGE",
      experiences: response.data.experiences,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      success: false,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};

export const CreateExperience = async (params: CreateExperienceDTO.IParams) => {
  try {
    const { token, ...rest } = params;
    const response = await api.post<CreateExperienceDTO.IResponse>(
      "/experiences", 
      rest,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      experience: response.data.experience,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      success: false,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};

export const UpdateExperience = async (params: UpdateExperienceDTO.IParams) => {
  try {
    const { experienceId, token, ...rest } = params;
    const response = await api.patch<UpdateExperienceDTO.IResponse>(
      `/experiences/${experienceId}`, rest,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      experience: response.data.experience,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      success: false,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};

export const DeleteExperience = async (params: DeleteExperienceDTO.IParams) => {
  try {
    const { experienceId, token } = params;
    const response = await api.delete<DeleteExperienceDTO.IResponse>(
      `/experiences/${experienceId}`,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      success: false,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};
