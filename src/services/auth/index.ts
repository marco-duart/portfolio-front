import api from "../api";
import { RegisterDTO, LoginDTO, MeDTO } from "./DTO";
import { SUCCESSFUL_MESSAGE } from "../../utils/enums/successful-message";
import { HttpStatusCode, isAxiosError } from "axios";
import { EXCEPTION_MESSAGE } from "../../utils/enums/exception-message";

export const Register = async (params: RegisterDTO.IParams) => {
  try {
    await api.post<RegisterDTO.IResponse>("/auth/register", params);

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.REGISTER,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.message,
        code: error.code,
      };
    }
    return {
      success: false,
      message: EXCEPTION_MESSAGE.INTERNAL_SERVER_ERROR,
      code: HttpStatusCode.InternalServerError,
    };
  }
};

export const Login = async (params: LoginDTO.IParams) => {
  try {
    const response = await api.post<LoginDTO.IResponse>("/auth/login", params);

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.LOGIN,
      code: "CODIGO",
      token: response.data.token,
      user: response.data.user,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.message,
        code: error.code,
      };
    }
    return {
      success: false,
      message: EXCEPTION_MESSAGE.INTERNAL_SERVER_ERROR,
      code: HttpStatusCode.InternalServerError,
    };
  }
};

export const Me = async (params: MeDTO.IParams) => {
  try {
    const { token } = params;
    const response = await api.get<MeDTO.IResponse>("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.ME_ROUTE,
      user: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.message,
        code: error.code,
      };
    }
    return {
      success: false,
      message: EXCEPTION_MESSAGE.INTERNAL_SERVER_ERROR,
      code: HttpStatusCode.InternalServerError,
    };
  }
};
