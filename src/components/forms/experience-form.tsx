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
import { UpdateExperienceData, CreateExperienceData } from "../../assets/@types/global";

const experienceFormSchema = z.object({
  id: z.coerce.number().nullable(),
  companyName: z.string().min(3, FORM_MESSAGE.EXPERIENCE_COMPANY_NAME),
  role: z.string().min(3, FORM_MESSAGE.EXPERIENCE_ROLE),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
});

type ExperienceFormData = z.infer<typeof experienceFormSchema>;

type Props = {
  experience?: Experience;
  onEdit: (params: UpdateExperienceData) => void;
  onCreate: (params: CreateExperienceData) => void;
  onCancel: () => void;
};

export const ExperienceForm: React.FC<Props> = ({ experience, onCancel, onCreate, onEdit }) => {
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
      onEdit({ ...rest, experienceId: id });
    } else {
      const { id, ...rest } = data;
      onCreate(rest);
    }
    onCancel();
  };

  const handleDeleteForm

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
      setValue("endDate", "");
      setValue("description", "");
    }
  }, [experience]);

  return (
    <S.ExperienceForm onSubmit={handleSubmit(handleSubmitForm)}>
      <S.Title>Experiência:</S.Title>
      <S.InputSection>
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
      </S.InputSection>

      <S.ButtonSection>
        {(disabled && experience) && (
          <CrudButton onClick={handleDisableInput} action="edit">
            Editar
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
