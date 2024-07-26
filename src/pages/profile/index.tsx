import * as S from "./styles"
import * as CONSTANTS from "../../utils/constants/constants"
import { ResumeForm } from "../../components/forms/resume-form"
import { useResumeCrud } from "../../hooks/resume"

export const Profile: React.FC = () => {
  const { resume, createResume, updateResume } = useResumeCrud()
  return (
    <S.Container>
      <S.Title>Perfil</S.Title>
      <ResumeForm resume={resume} onCancel={() => {}} onCreate={createResume} onEdit={updateResume} /> 
    </S.Container>
  )
}
