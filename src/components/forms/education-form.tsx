import React, { useEffect, useState } from "react";
// LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// STYLES
import * as S from "./styles";
// UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";
import { Education } from "../../models/education";
import CrudButton from "../shared/buttons/crud-button";
import { UpdateEducationData, CreateEducationData, DeleteEducationData } from "../../assets/@types/global";
import { EducationDegreeEnum } from "../../utils/enums/education-degree.enum";
import { MinusCircle } from "@styled-icons/evaicons-solid"
import BaseIcon from "../shared/icons/base-icon";

const educationFormSchema = z.object({
  id: z.coerce.number().nullable(),
  institutionName: z.string().min(3, FORM_MESSAGE.EDUCATION_INSTITUTION_NAME),
  degree: z.nativeEnum(EducationDegreeEnum, {
    errorMap: () => ({ message: FORM_MESSAGE.EDUCATION_DEGREE })
  }),
  startDate: z.string(),
  endDate: z.string().optional(),
  description: z.string(),
});

type EducationFormData = z.infer<typeof educationFormSchema>;

type Props = {
  resumeId?: number;
  education?: Education;
  onEdit: (params: UpdateEducationData) => void;
  onCreate: (params: CreateEducationData) => void;
  onDelete: (params: DeleteEducationData) => void;
  onCancel: () => void;
};

export const EducationForm: React.FC<Props> = ({ resumeId, education, onCancel, onCreate, onEdit, onDelete }) => {
  const [disabled, setDisabled] = useState<boolean>(education ? true : false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EducationFormData>({
    resolver: zodResolver(educationFormSchema),
  });

  const handleDisableInput = () => {
    setDisabled(!disabled);
  };

  const handleSubmitForm = async (data: EducationFormData) => {
    if (education && data.id) {
      const { id, ...rest } = data;
      if (!id) {
        return;
      }
      onEdit({ ...rest, educationId: id });
    } else {
      if (!resumeId) {
        return;
      }

      const { id, ...rest } = data;
      onCreate({ ...rest, resumeId });
    }
    onCancel();
  };

  const handleDeleteForm = async () => {
    if (education && education.id) {
      onDelete({ educationId: education.id });
    }
  };

  useEffect(() => {
    if (education) {
      setDisabled(true);
      setValue("id", education.id);
      setValue("institutionName", education.institutionName);
      setValue("degree", education.degree);
      setValue("startDate", education.startDate);
      setValue("endDate", education.endDate);
      setValue("description", education.description);
    } else {
      setDisabled(false);
      setValue("id", null);
      setValue("institutionName", "");
      setValue("degree", EducationDegreeEnum.HIGH_SCHOOL);
      setValue("startDate", "");
      setValue("endDate", "");
      setValue("description", "");
    }
  }, [education]);

  return (
    <S.EducationForm onSubmit={handleSubmit(handleSubmitForm)}>
      <S.HeaderIconSection>
      {!education && <BaseIcon
          icon={MinusCircle}
          text=""
          expanded={false}
          handleClick={onCancel}
          link={""} />}
      </S.HeaderIconSection>
      <S.Title>Id: {education?.id}</S.Title>
      <S.InputSectionColumn>
        <div>
          <S.Label htmlFor="institutionName">Instituição</S.Label>
          <S.TextInput
            error={errors.institutionName ? true : false}
            {...register("institutionName")}
            type="text"
            disabled={disabled}
          />
          {errors.institutionName && <p>{errors.institutionName.message}</p>}
        </div>
        <div>
          <S.Label htmlFor="degree">Grau</S.Label>
          <S.SelectInput
            error={errors.degree ? true : false}
            {...register("degree")}
            disabled={disabled}
          >
            <option value="">Selecione</option>
            {Object.values(EducationDegreeEnum).map((degree) => (
              <option key={degree} value={degree}>
                {degree}
              </option>
            ))}
          </S.SelectInput>
          {errors.degree && <p>{errors.degree.message}</p>}
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
            size="small"
            {...register("description")}
            disabled={disabled}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
      </S.InputSectionColumn>

      <S.ButtonSection>
        {disabled && education && (
          <CrudButton onClick={handleDisableInput} action="edit">
            Editar
          </CrudButton>
        )}
        {(disabled && education) && (
          <CrudButton onClick={handleDeleteForm} action="delete">
            Excluir
          </CrudButton>
        )}
        {!disabled && education && (
          <CrudButton onClick={handleDisableInput} action="cancel">
            Cancelar
          </CrudButton>
        )}
        {!disabled && <CrudButton type="submit" action="save">Salvar</CrudButton>}
      </S.ButtonSection>
    </S.EducationForm>
  );
};
