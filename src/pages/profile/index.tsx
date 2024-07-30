import * as S from "./styles"
import * as CONSTANTS from "../../utils/constants/constants"
import { ResumeForm } from "../../components/forms/resume-form"
import { useEducationCrud, useExperienceCrud, useResumeCrud, useSkillCrud } from "../../hooks"
import BaseCard from "../../components/shared/cards/base-card"
import { ExperienceForm } from "../../components/forms/experience-form"


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
      { experiences?.map((experience, index) => (
        <BaseCard key={index}>
          <ExperienceForm resumeId={resume?.id} experience={experience} onCreate={createExperience} onEdit={updateExperience} onCancel={() => {}} />
        </BaseCard>
      ))}
    </S.Container>
  )
}
