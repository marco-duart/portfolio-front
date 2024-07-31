import { isAxiosError } from "axios";
import api from "../api";
import {
  GetSkillDTO,
  GetSkillsDTO,
  CreateSkillDTO,
  UpdateSkillDTO,
  DeleteSkillDTO,
} from "./DTO";

export const GetSkill = async (params: GetSkillDTO.IParams) => {
  try {
    const { skillId } = params;
    const response = await api.get<GetSkillDTO.IResponse>(
      `/skills/${skillId}`,
    );

    
    return {
      success: true,
      message: "MESSAGE",
      skill: response.data,
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

export const GetSkills = async (params: GetSkillsDTO.IParams) => {
  try {
    const response = await api.get<GetSkillsDTO.IResponse>(
      "/skills",
    );

    return {
      success: true,
      message: "MESSAGE",
      skills: response.data,
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

export const CreateSkill = async (params: CreateSkillDTO.IParams) => {
  try {
    const { token, ...rest } = params;
    const response = await api.post<CreateSkillDTO.IResponse>(
      "/skills", 
      rest,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      success: true,
      message: "MESSAGE",
      skill: response.data,
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

export const UpdateSkill = async (params: UpdateSkillDTO.IParams) => {
  try {
    const { skillId, token, ...rest } = params;
    const response = await api.patch<UpdateSkillDTO.IResponse>(
      `/skills/${skillId}`, rest,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      success: true,
      message: "MESSAGE",
      skill: response.data,
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

export const DeleteSkill = async (params: DeleteSkillDTO.IParams) => {
  try {
    const { skillId, token } = params;
    const response = await api.delete<DeleteSkillDTO.IResponse>(
      `/skills/${skillId}`,
      { headers: { Authorization: `Bearer ${token}` } }
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
