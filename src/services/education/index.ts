import { isAxiosError } from "axios";
import api from "../api";
import {
  GetEducationDTO,
  GetEducationsDTO,
  CreateEducationDTO,
  UpdateEducationDTO,
  DeleteEducationDTO,
} from "./DTO";

export const GetEducation = async (params: GetEducationDTO.IParams) => {
  try {
    const { educationId } = params;
    const response = await api.get<GetEducationDTO.IResponse>(
      `/educations/${educationId}`,
    );

    
    return {
      success: true,
      message: "MESSAGE",
      education: response.data.education,
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

export const GetEducations = async (params: GetEducationsDTO.IParams) => {
  try {
    const response = await api.get<GetEducationsDTO.IResponse>(
      "/educations",
    );

    return {
      success: true,
      message: "MESSAGE",
      educations: response.data.educations,
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

export const CreateEducation = async (params: CreateEducationDTO.IParams) => {
  try {
    const { token, ...rest } = params;
    const response = await api.post<CreateEducationDTO.IResponse>(
      "/educations", 
      rest,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      education: response.data.education,
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

export const UpdateEducation = async (params: UpdateEducationDTO.IParams) => {
  try {
    const { educationId, token, ...rest } = params;
    const response = await api.patch<UpdateEducationDTO.IResponse>(
      `/educations/${educationId}`, rest,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      education: response.data.education,
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

export const DeleteEducation = async (params: DeleteEducationDTO.IParams) => {
  try {
    const { educationId, token } = params;
    const response = await api.delete<DeleteEducationDTO.IResponse>(
      `/educations/${educationId}`,
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
