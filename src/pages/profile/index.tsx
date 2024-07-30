import * as S from "./styles"
import * as CONSTANTS from "../../utils/constants/constants"
import { ResumeForm } from "../../components/forms/resume-form"
import { useEducationCrud, useExperienceCrud, useResumeCrud, useSkillCrud } from "../../hooks"
import BaseCard from "../../components/shared/cards/base-card"
import { ExperienceForm } from "../../components/forms/experience-form"
import { EducationForm } from "../../components/forms/education-form"
import { SkillForm } from "../../components/forms/skill-form"


export const Profile: React.FC = () => {
  const { resume, createResume, updateResume } = useResumeCrud()
  const { experiences, createExperience, updateExperience } = useExperienceCrud()
  const { educations, createEducation, updateEducation } = useEducationCrud()
  const { skills, createSkill, updateSkill } = useSkillCrud()

  console.log("Experience: ", experiences, "/n Educations: ", educations, "/n Skills: ", skills)
  return (
    <S.Container>
      <S.Title>Perfil</S.Title>
      <ResumeForm resume={resume} onCancel={() => {}} onCreate={createResume} onEdit={updateResume} />
      <div>
      { experiences?.map((experience, index) => (
        <BaseCard key={index}>
          <ExperienceForm resumeId={resume?.id} experience={experience} onCreate={createExperience} onEdit={updateExperience} onCancel={() => {}} />
        </BaseCard>
      ))}
      </div>
      <div>
      { educations?.map((education, index) => (
        <BaseCard key={index}>
          <EducationForm resumeId={resume?.id} education={education} onCreate={createEducation} onEdit={updateEducation} onCancel={() => {}} />
        </BaseCard>
      ))}
      </div>
      <div>
      { skills?.map((skill, index) => (
        <BaseCard key={index}>
          <SkillForm resumeId={resume?.id} skill={skill} onCreate={createSkill} onEdit={updateSkill} onCancel={() => {}} />
        </BaseCard>
      ))}
      </div>
    </S.Container>
  )
}
