import * as S from "./styles"
import * as CONSTANTS from "../../utils/constants/constants"
import { ResumeForm } from "../../components/forms/resume-form"

export const Profile: React.FC = () => {
  return (
    <S.Container>
      <ResumeForm /> 
    </S.Container>
  )
}
