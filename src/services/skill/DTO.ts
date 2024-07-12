import { Skill } from "../../models/skill";

export namespace CreateSkillDTO {
  export type IParams = {
    resumeId: number;

    token: string;
  };
  export type IResponse = {
    message: string;
    error: boolean;
    skill: Skill;
  };
}

export namespace GetSkillsDTO {
  export type IParams = {
    token: string;
  };
  export type IResponse = {
    message: string;
    error: boolean;
    skills: Skill[];
  };
}

export namespace GetSkillDTO {
  export type IParams = {
    skillId: number;
    token: string;
  };
  export type IResponse = {
    message: string;
    error: boolean;
    skill: Skill;
  };
}

export namespace UpdateSkillDTO {
  export type IParams = {
    skillId: number;

    token: string;
  };
  export type IResponse = {
    message: string;
    error: boolean;
    skill: Skill;
  };
}

export namespace DeleteSkillDTO {
  export type IParams = {
    skillId: number;
  };
  export type IResponse = {
    message: string;
    error: boolean;
  };
}
