import Curriculum from "../../components/curriculum/curriculum";
import { useUserBio } from "../../hooks";
import * as S from "./styles"

export const Resume: React.FC = () => {
  const { user, skills, educations, experiences } = useUserBio();

  return (
    <S.Container>
      <Curriculum user={user} skills={[]} educations={educations} experiences={experiences} />
    </S.Container>
  );
};
