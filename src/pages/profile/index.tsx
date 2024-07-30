import * as S from "./styles"
import * as CONSTANTS from "../../utils/constants/constants"
import { ResumeForm } from "../../components/forms/resume-form"
import { useEducationCrud, useExperienceCrud, useResumeCrud, useSkillCrud } from "../../hooks"


export const Profile: React.FC = () => {
  const { resume, createResume, updateResume } = useResumeCrud()
  const { experiences } = useExperienceCrud()
  const { educations } = useEducationCrud()
  const { skills } = useSkillCrud()

  console.log("Experience: ", experiences, "/n Educations: ", educations, "/n Skills: ", skills)
  return (
    <S.Container>
      <S.Title>Perfil</S.Title>
      <ResumeForm resume={resume} onCancel={() => {}} onCreate={createResume} onEdit={updateResume} /> 
    </S.Container>
  )
}
