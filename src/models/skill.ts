import { SkillLevelEnum } from "../utils/enums/skill-level.enum";

export interface Skill {
  id: number;
  name: string;
  level: SkillLevelEnum;
  createdAt: Date;
  updatedAt: Date;
}
