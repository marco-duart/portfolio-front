import { Education } from "../../models/education";
import { EducationDegreeEnum } from "../../utils/enums/education-degree.enum";

export namespace CreateEducationDTO {
  export type IParams = {
    resumeId: number;
    institutionName: string;
    degree: EducationDegreeEnum;
    startDate: Date;
    endDate: Date;
    description: string;
    token: string;
  };
  export type IResponse = {
    message: string;
    error: boolean;
    education: Education;
  };
}

export namespace GetEducationsDTO {
  export type IParams = {
  };
  export type IResponse = {
    message: string;
    error: boolean;
    educations: Education[];
  };
}

export namespace GetEducationDTO {
  export type IParams = {
    educationId: number;
  };
  export type IResponse = {
    message: string;
    error: boolean;
    education: Education;
  };
}

export namespace UpdateEducationDTO {
  export type IParams = {
    educationId: number;
    institutionName?: string;
    degree?: EducationDegreeEnum;
    startDate?: Date;
    endDate?: Date;
    description?: string;
    token: string;
  };
  export type IResponse = {
    message: string;
    error: boolean;
    education: Education;
  };
}

export namespace DeleteEducationDTO {
  export type IParams = {
    educationId: number;
    token: string;
  };
  export type IResponse = {
    message: string;
    error: boolean;
  };
}
