import { EducationDegreeEnum } from "../utils/enums/education-degree.enum";

export interface Education {
  id: number;
  institutionName: string;
  degree: EducationDegreeEnum;
  startDate: Date;
  endDate: Date;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
