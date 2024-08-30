import { format } from "date-fns";
import { useUserBio } from "../../hooks";
import * as S from "./styles";

export const Resume: React.FC = () => {
  const { user, skills, educations, experiences } = useUserBio();

  return (
    <S.Container>
      <S.PageTitle>Meu Currículo</S.PageTitle>
      <S.Paper>
        <S.Header>
          <S.Name>{user?.name}</S.Name>
          <S.Title>{user?.bioTitle}</S.Title>
        </S.Header>

        <S.Section>
          <S.SectionTitle>Dados Pesoais</S.SectionTitle>
          <S.InfoItem>
            <S.ItemSubtitle>Telefone:</S.ItemSubtitle>
            <S.ItemDescription>{user?.phone}</S.ItemDescription>
          </S.InfoItem>
          <S.InfoItem>
            <S.ItemSubtitle>E-mail:</S.ItemSubtitle>
            <S.ItemDescription>{user?.businessEmail}</S.ItemDescription>
          </S.InfoItem>
          <S.InfoItem>
            <S.ItemSubtitle>LinkedIn:</S.ItemSubtitle>
            <S.ItemDescription>{user?.linkedin}</S.ItemDescription>
          </S.InfoItem>
          <S.InfoItem>
            <S.ItemSubtitle>Github:</S.ItemSubtitle>
            <S.ItemDescription>{user?.github}</S.ItemDescription>
          </S.InfoItem>
          <S.InfoItem>
            <S.ItemSubtitle>Endereço:</S.ItemSubtitle>
            <S.ItemDescription>{user?.address}</S.ItemDescription>
          </S.InfoItem>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Educação</S.SectionTitle>
          {educations?.map((education, index) => (
            <S.Item key={index}>
              <S.ItemTitle>{education.degree}</S.ItemTitle>
              <S.ItemSubtitle>
                {education.institutionName} - {education.degreeLevel} -{" "}
                {format(education.startDate, "dd/MM/yyyy")}
              </S.ItemSubtitle>
              <S.ItemSubtitle>
                {education.institutionName} - {education.degreeLevel} -{" "}
                {format(education.startDate, "dd/MM/yyyy")}
              </S.ItemSubtitle>
            </S.Item>
          ))}
        </S.Section>

        <S.Section>
          <S.SectionTitle>Experiencias</S.SectionTitle>
          {experiences?.map((experience, index) => (
            <S.Item key={index}>
              <S.ItemTitle>{experience.role}</S.ItemTitle>
              <S.ItemSubtitle>{experience.companyName}</S.ItemSubtitle>
              <S.ItemSubtitle>
                {format(experience.startDate, "dd/MM/yyyy")} -{" "}
                {experience.endDate
                  ? format(experience.startDate, "dd/MM/yyyy")
                  : "Atual"}
              </S.ItemSubtitle>
              <S.ItemDescription>{experience.description}</S.ItemDescription>
            </S.Item>
          ))}
        </S.Section>

        <S.Section>
          <S.SectionTitle>Habilidades</S.SectionTitle>
          <S.SkillSection>
            {skills?.map((skill, index) => (
              <S.SkillItem key={index}>
                <S.ItemTitle>{skill.name}</S.ItemTitle>
              </S.SkillItem>
            ))}
          </S.SkillSection>
        </S.Section>
      </S.Paper>
    </S.Container>
  );
};
