import { isAxiosError } from "axios";
import api from "../api";
import {
  CreatePortfolioItemDTO,
  DeletePortfolioItemDTO,
  GetPortfolioItemDTO,
  GetPortfolioItemsDTO,
  UpdatePortfolioItemDTO,
  DeletePortfolioPhotoDTO,
  UploadPortfolioPhotoDTO,
} from "./DTO";

export const GetPortfolioItem = async (params: GetPortfolioItemDTO.IParams) => {
  try {
    const { portfolioItemId } = params;
    const response = await api.get<GetPortfolioItemDTO.IResponse>(
      `/portfolio/${portfolioItemId}`,
    );

    
    return {
      success: true,
      message: "MESSAGE",
      portfolioItem: response.data,
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

export const GetPortfolioItems = async (params: GetPortfolioItemsDTO.IParams) => {
  try {
    const response = await api.get<GetPortfolioItemsDTO.IResponse>(
      "/portfolio",
    );

    return {
      success: true,
      message: "MESSAGE",
      portfolioItems: response.data,
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

export const CreatePortfolioItem = async (params: CreatePortfolioItemDTO.IParams) => {
  try {
    const { token, ...rest } = params;
    const response = await api.post<CreatePortfolioItemDTO.IResponse>(
      "/portfolio", 
      rest,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      success: true,
      message: "MESSAGE",
      portfolioItem: response.data,
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

export const UpdatePortfolioItem = async (params: UpdatePortfolioItemDTO.IParams) => {
  try {
    const { portfolioItemId, token, ...rest } = params;
    const response = await api.patch<UpdatePortfolioItemDTO.IResponse>(
      `/portfolio/${portfolioItemId}`, rest,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      success: true,
      message: "MESSAGE",
      portfolioItem: response.data,
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

export const DeletePortfolioItem = async (params: DeletePortfolioItemDTO.IParams) => {
  try {
    const { portfolioItemId, token } = params;
    const response = await api.delete<DeletePortfolioItemDTO.IResponse>(
      `/portfolio/${portfolioItemId}`,
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

export const UploadPortfolioPhoto = async (params: UploadPortfolioPhotoDTO.IParams) => {
  try {
    const { token, portfolioItemId,...rest } = params;
    const response = await api.post<UploadPortfolioPhotoDTO.IResponse>(
      `/portfolio/${portfolioItemId}/upload-photo`,
      rest,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: true,
      message: "MESSAGE",
    };
  } catch (error) {
    console.log(error);
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

export const DeletePortfolioPhoto = async (params: DeletePortfolioPhotoDTO.IParams) => {
  try {
    const { token, portfolioPhotoId, ...rest } = params;
    const response = await api.post<DeletePortfolioPhotoDTO.IResponse>(
      `/portfolio/delete-photo/${portfolioPhotoId}`,
      rest,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: true,
      message: "MESSAGE",
    };
  } catch (error) {
    console.log(error);
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