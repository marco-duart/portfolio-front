import React, { useState } from "react";
import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import { ResumeForm } from "../../components/forms/resume-form";
import { useEducationCrud, useExperienceCrud, useResumeCrud, useSkillCrud } from "../../hooks";
import BaseCard from "../../components/shared/cards/base-card";
import { ExperienceForm } from "../../components/forms/experience-form";
import { EducationForm } from "../../components/forms/education-form";
import { SkillForm } from "../../components/forms/skill-form";

export const Profile: React.FC = () => {
  const { resume, createResume, updateResume } = useResumeCrud();
  const { experiences, createExperience, updateExperience } = useExperienceCrud();
  const { educations, createEducation, updateEducation } = useEducationCrud();
  const { skills, createSkill, updateSkill } = useSkillCrud();

  const [showNewSkillForm, setShowNewSkillForm] = useState(false);

  const handleAddNewSkill = () => {
    setShowNewSkillForm(true);
  };

  const handleCancelNewSkill = () => {
    setShowNewSkillForm(false);
  };

  return (
    <S.Container>
      <S.Title>Perfil</S.Title>
      <ResumeForm resume={resume} onCancel={() => {}} onCreate={createResume} onEdit={updateResume} />
      
      <div>
        {experiences?.map((experience, index) => (
          <BaseCard key={index}>
            <ExperienceForm resumeId={resume?.id} experience={experience} onCreate={createExperience} onEdit={updateExperience} onCancel={() => {}} />
          </BaseCard>
        ))}
      </div>
      
      <div>
        {educations?.map((education, index) => (
          <BaseCard key={index}>
            <EducationForm resumeId={resume?.id} education={education} onCreate={createEducation} onEdit={updateEducation} onCancel={() => {}} />
          </BaseCard>
        ))}
      </div>
      
      <div>
        {skills?.map((skill, index) => (
          <BaseCard key={index}>
            <SkillForm resumeId={resume?.id} skill={skill} onCreate={createSkill} onEdit={updateSkill} onCancel={() => {}} />
          </BaseCard>
        ))}
        {showNewSkillForm && (
          <BaseCard>
            <SkillForm resumeId={resume?.id} onCreate={createSkill} onEdit={updateSkill} onCancel={handleCancelNewSkill} />
          </BaseCard>
        )}
        <S.AddButton onClick={handleAddNewSkill}>Adicionar Nova Habilidade</S.AddButton>
      </div>
    </S.Container>
  );
};
