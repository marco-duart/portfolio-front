import { Resume } from "../../models/resume";

export namespace CreateResumeDTO {
  export type IParams = {
    userId: number;
    title: string;
    summary: string;
    token: string;
  };
  export type IResponse = Resume;
}

export namespace GetResumeDTO {
  export type IParams = {
    userId: number;
  };
  export type IResponse =  Resume;
}

export namespace UpdateResumeDTO {
  export type IParams = {
    resumeId: number;
    title: string;
    summary: string;
    token: string;
  };
  export type IResponse = Resume;
}

export namespace DeleteResumeDTO {
  export type IParams = {
    resumeId: number;
    token: string;
  };
  export type IResponse = {
    message: string;
    error: boolean;
  };
}
