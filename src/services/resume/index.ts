import { isAxiosError } from "axios";
import api from "../api";
import {
  GetResumeDTO,
  CreateResumeDTO,
  UpdateResumeDTO,
  DeleteResumeDTO,
} from "./DTO";

export const GetResume = async (params: GetResumeDTO.IParams) => {
  try {
    const response = await api.get<GetResumeDTO.IResponse>(
      `/resumes`,
      { params }
    );

    
    return {
      success: true,
      message: "MESSAGE",
      resume: response.data.resume,
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

export const CreateResume = async (params: CreateResumeDTO.IParams) => {
  try {
    const { token, ...rest } = params;
    const response = await api.post<CreateResumeDTO.IResponse>(
      "/resumes", 
      rest,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      resume: response.data.resume,
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

export const UpdateResume = async (params: UpdateResumeDTO.IParams) => {
  try {
    const { resumeId, token, ...rest } = params;
    const response = await api.patch<UpdateResumeDTO.IResponse>(
      `/resumes/${resumeId}`, rest,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      resume: response.data.resume,
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

export const DeleteResume = async (params: DeleteResumeDTO.IParams) => {
  try {
    const { resumeId, token } = params;
    const response = await api.delete<DeleteResumeDTO.IResponse>(
      `/resumes/${resumeId}`,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: response.data.message,
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
