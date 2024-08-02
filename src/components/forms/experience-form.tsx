import React, { useEffect, useState } from "react";
//LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//STYLES
import * as S from "./styles";
//UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";
import { Experience } from "../../models/experience";
import CrudButton from "../shared/buttons/crud-button";
import { UpdateExperienceData, CreateExperienceData, DeleteExperienceData } from "../../assets/@types/global";
import { MinusCircle } from "@styled-icons/evaicons-solid"
import BaseIcon from "../shared/icons/base-icon";

const experienceFormSchema = z.object({
  id: z.coerce.number().nullable(),
  companyName: z.string().min(3, FORM_MESSAGE.EXPERIENCE_COMPANY_NAME),
  role: z.string().min(3, FORM_MESSAGE.EXPERIENCE_ROLE),
  startDate: z.string(),
  endDate: z.string().nullable(),
  description: z.string(),
}); 

type ExperienceFormData = z.infer<typeof experienceFormSchema>;

type Props = {
  resumeId?: number;
  experience?: Experience;
  onEdit: (params: UpdateExperienceData) => void;
  onCreate: (params: CreateExperienceData) => void;
  onDelete: (params: DeleteExperienceData) => void;
  onCancel: () => void;
};

export const ExperienceForm: React.FC<Props> = ({ resumeId, experience, onCancel, onCreate, onEdit, onDelete }) => {
  const [disabled, setDisabled] = useState<boolean>(experience ? true : false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ExperienceFormData>({
    resolver: zodResolver(experienceFormSchema),
  });

  const handleDisableInput = () => {
    setDisabled(!disabled);
  };

  const handleSubmitForm = async (data: ExperienceFormData) => {
    if (experience && data.id) {
      const { id, ...rest } = data;
      if (!id) {
        return;
      }

      onEdit({...rest, experienceId: id});
    } else {
      if (!resumeId) {
        return;
      }
    
      const { id, ...rest } = data;
      onCreate({...rest, resumeId});
    }
    onCancel();
  };

  const handleDeleteForm = async () => {
    if (experience && experience.id) {
      onDelete({ experienceId: experience.id });
    }
  };

  useEffect(() => {
    if (experience) {
      setDisabled(true);
      setValue("id", experience.id);
      setValue("companyName", experience.companyName);
      setValue("role", experience.role);
      setValue("startDate", experience.startDate);
      setValue("endDate", experience.endDate);
      setValue("description", experience.description);
    } else {
      setDisabled(false);
      setValue("id", null);
      setValue("companyName", "");
      setValue("role", "");
      setValue("startDate", "");
      setValue("endDate", null);
      setValue("description", "");
    }
  }, [experience]);

  return (
    <S.ExperienceForm onSubmit={handleSubmit(handleSubmitForm)}>
      <S.HeaderIconSection>
      {!experience && <BaseIcon
          icon={MinusCircle}
          text=""
          expanded={false}
          handleClick={onCancel}
          link={""} />}
      </S.HeaderIconSection>
      <S.Title>Id: {experience?.id}</S.Title>
      <S.InputSectionColumn>
        <div>
          <S.Label htmlFor="companyName">Empresa</S.Label>
          <S.TextInput
            error={errors.companyName ? true : false}
            {...register("companyName")}
            type="text"
            disabled={disabled}
          />
          {errors.companyName && <p>{errors.companyName.message}</p>}
        </div>
        <div>
          <S.Label htmlFor="role">Cargo</S.Label>
          <S.TextInput
            error={errors.role ? true : false}
            {...register("role")}
            type="text"
            disabled={disabled}
          />
          {errors.role && <p>{errors.role.message}</p>}
        </div>
        <div>
          <S.Label htmlFor="startDate">Data de Início</S.Label>
          <S.TextInput
            error={errors.startDate ? true : false}
            {...register("startDate")}
            type="date"
            disabled={disabled}
          />
          {errors.startDate && <p>{errors.startDate.message}</p>}
        </div>
        <div>
          <S.Label htmlFor="endDate">Data de Término</S.Label>
          <S.TextInput
            error={errors.endDate ? true : false}
            {...register("endDate")}
            type="date"
            disabled={disabled}
          />
          {errors.endDate && <p>{errors.endDate.message}</p>}
        </div>
        <div>
          <S.Label htmlFor="description">Descrição</S.Label>
          <S.TextArea
            error={errors.description ? true : false}
            {...register("description")}
            disabled={disabled}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
      </S.InputSectionColumn>

      <S.ButtonSection>
        {(disabled && experience) && (
          <CrudButton onClick={handleDisableInput} action="edit">
            Editar
          </CrudButton>
        )}
        {(disabled && experience) && (
          <CrudButton onClick={handleDeleteForm} action="delete">
            Excluir
          </CrudButton>
        )}
        {(!disabled && experience) && (
          <CrudButton onClick={handleDisableInput} action="cancel">
            Cancelar
          </CrudButton>
        )}
        {!disabled && <CrudButton type="submit" action="save">Salvar</CrudButton>}
      </S.ButtonSection>
    </S.ExperienceForm>
  );
};
