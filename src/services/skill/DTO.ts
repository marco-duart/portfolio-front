import { Skill } from "../../models/skill";
import { SkillLevelEnum } from "../../utils/enums/skill-level.enum";

export namespace CreateSkillDTO {
  export type IParams = {
    resumeId: number;
    name: string;
    level: SkillLevelEnum;
    token: string;
  };
  export type IResponse = Skill;
}

export namespace GetSkillsDTO {
  export type IParams = {
  };
  export type IResponse = Skill[];
}

export namespace GetSkillDTO {
  export type IParams = {
    skillId: number;
  };
  export type IResponse = Skill;
}

export namespace UpdateSkillDTO {
  export type IParams = {
    skillId: number;
    name?: string;
    level?: SkillLevelEnum;
    token: string;
  };
  export type IResponse = Skill;
}

export namespace DeleteSkillDTO {
  export type IParams = {
    skillId: number;
    token: string;
  };
  export type IResponse = {
    message: string;
    error: boolean;
  };
}
