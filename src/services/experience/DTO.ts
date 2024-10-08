import { Experience } from "../../models/experience";

export namespace CreateExperienceDTO {
  export type IParams = {
    resumeId: number;
    companyName: string;
    role: string;
    startDate: string;
    endDate: string | null;
    description: string;
    token: string;
  };
  export type IResponse = Experience;
}

export namespace GetExperiencesDTO {
  export type IParams = {
  };
  export type IResponse = Experience[];
}

export namespace GetExperienceDTO {
  export type IParams = {
    experienceId: number;
  };
  export type IResponse = Experience;
}

export namespace UpdateExperienceDTO {
  export type IParams = {
    experienceId: number;
    companyName?: string;
    role?: string;
    startDate?: string;
    endDate: string | null;
    description?: string;
    token: string;
  };
  export type IResponse = Experience;
}

export namespace DeleteExperienceDTO {
  export type IParams = {
    experienceId: number;
    token: string;
  };
  export type IResponse = {
    message: string;
    error: boolean;
  };
}
