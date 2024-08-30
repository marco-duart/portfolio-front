import { EducationDegreeEnum } from "../utils/enums/education-degree.enum";

export interface Education {
  id: number;
  institutionName: string;
  degree: string;
  degreeLevel: EducationDegreeEnum;
  startDate: string;
  endDate: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
