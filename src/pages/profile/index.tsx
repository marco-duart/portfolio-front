import React, { useState } from "react";
import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import { ResumeForm } from "../../components/forms/resume-form";
import { useEducationCrud, useExperienceCrud, useResumeCrud, useSkillCrud } from "../../hooks";
import BaseCard from "../../components/shared/cards/base-card";
import { ExperienceForm } from "../../components/forms/experience-form";
import { EducationForm } from "../../components/forms/education-form";
import { SkillForm } from "../../components/forms/skill-form";
import { PlusCircle } from "@styled-icons/evaicons-solid"
import BaseIcon from "../../components/shared/icons/base-icon";

export const Profile: React.FC = () => {
  const { resume, createResume, updateResume } = useResumeCrud();
  const { educations, createEducation, updateEducation } = useEducationCrud();
  const { experiences, createExperience, updateExperience } = useExperienceCrud();
  const { skills, createSkill, updateSkill } = useSkillCrud();

  const [showNewEducationForm, setShowNewEducationForm] = useState(false);
  const [showNewExperienceForm, setShowNewExperienceForm] = useState(false);
  const [showNewSkillForm, setShowNewSkillForm] = useState(false);

  const handleAddNewEducation = () => {
    setShowNewEducationForm(true);
  };

  const handleCancelNewEducation = () => {
    setShowNewEducationForm(false);
  };

  const handleAddNewExperience = () => {
    setShowNewExperienceForm(true);
  };

  const handleCancelNewExperience = () => {
    setShowNewExperienceForm(false);
  };

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
        {educations?.map((education, index) => (
          <BaseCard key={index}>
            <EducationForm resumeId={resume?.id} education={education} onCreate={createEducation} onEdit={updateEducation} onCancel={() => {}} />
          </BaseCard>
        ))}
        {showNewEducationForm && (
          <BaseCard>
            <EducationForm resumeId={resume?.id} onCreate={createEducation} onEdit={updateEducation} onCancel={handleCancelNewEducation} />
          </BaseCard>
        )}
        <BaseIcon
          icon={PlusCircle}
          text=""
          expanded={false}
          handleClick={handleAddNewEducation}
          link={""} />
      </div>

      <div>
        {experiences?.map((experience, index) => (
          <BaseCard key={index}>
            <ExperienceForm resumeId={resume?.id} experience={experience} onCreate={createExperience} onEdit={updateExperience} onCancel={() => {}} />
          </BaseCard>
        ))}
        {showNewExperienceForm && (
          <BaseCard>
            <ExperienceForm resumeId={resume?.id} onCreate={createExperience} onEdit={updateExperience} onCancel={handleCancelNewExperience} />
          </BaseCard>
        )}
        <BaseIcon
          icon={PlusCircle}
          text=""
          expanded={false}
          handleClick={handleAddNewExperience}
          link={""} />
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
        <BaseIcon
          icon={PlusCircle}
          text=""
          expanded={false}
          handleClick={handleAddNewSkill}
          link={""} />
      </div>
    </S.Container>
  );
};
