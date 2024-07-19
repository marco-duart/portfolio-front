import { EducationDegreeEnum } from "../utils/enums/education-degree.enum";

export interface Education {
  id: number;
  institutionName: string;
  degree: EducationDegreeEnum;
  startDate: string;
  endDate: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
