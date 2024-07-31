import { EducationDegreeEnum } from "../../utils/enums/education-degree.enum";
import { SkillLevelEnum } from "../../utils/enums/skill-level.enum";

export type CreateResumeData = {
  title: string;
  summary: string;
};

export type UpdateResumeData = {
  resumeId: number;
  title: string;
  summary: string;
};

export type DeleteResumeData = {
  resumeId: number;
};


export type CreateEducationData = {
  resumeId: number;
  institutionName: string;
  degree: EducationDegreeEnum;
  startDate: string;
  endDate?: string;
  description: string;
};

export type UpdateEducationData = {
  educationId: number;
  institutionName: string;
  degree: EducationDegreeEnum;
  startDate: string;
  endDate?: string;
  description: string;
};

export type DeleteEducationData = {
  educationId: number;
};


export type CreateExperienceData = {
  resumeId: number;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
};

export type UpdateExperienceData = {
  experienceId: number;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
};

export type DeleteExperienceData = {
  experienceId: number;
};

export type CreateSkillData = {
  resumeId: number;
  name: string;
  level: SkillLevelEnum;
};

export type UpdateSkillData = {
  skillId: number;
  name: string;
  level: SkillLevelEnum;
};

export type DeleteSkillData = {
  skillId: number;
};