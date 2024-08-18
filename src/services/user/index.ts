import { isAxiosError } from "axios";
import api from "../api";
import {
  GetUserDTO,
} from "./DTO";

export const GetUser = async (params: GetUserDTO.IParams) => {
  const { userId } = params
  try {
    const response = await api.get<GetUserDTO.IResponse>(
      `/users/${userId}`,
      { params }
    );

    return {
      success: true,
      message: "MESSAGE",
      user: response.data,
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