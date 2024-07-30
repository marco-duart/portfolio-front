import React, { useEffect, useState } from "react";
//LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//STYLES
import * as S from "./styles";
//UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";
import { Education } from "../../models/education";
import CrudButton from "../shared/buttons/crud-button";
import { UpdateEducationData, CreateEducationData } from "../../assets/@types/global";

const educationFormSchema = z.object({
  id: z.coerce.number().nullable(),
  institutionName: z.string().min(3, FORM_MESSAGE.EDUCATION_INSTITUTION_NAME),
  degree: z.string().min(3, FORM_MESSAGE.EDUCATION_DEGREE),
  startDate: z.string(),
  endDate: z.string().optional(),
  description: z.string(),
});

type EducationFormData = z.infer<typeof educationFormSchema>;

type Props = {
  education?: Education;
  onEdit: (params: UpdateEducationData) => void;
  onCreate: (params: CreateEducationData) => void;
  onCancel: () => void;
};

export const EducationForm: React.FC<Props> = ({ education, onCancel, onCreate, onEdit }) => {
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
      onEdit();
    } else {
      const { id, ...rest } = data;
      onCreate();
    }
    onCancel();
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
      setValue("degree", "");
      setValue("startDate", "");
      setValue("endDate", "");
      setValue("description", "");
    }
  }, [education]);

  return (
    <S.EducationForm onSubmit={handleSubmit(handleSubmitForm)}>
      <S.Title>Educação:</S.Title>
      <S.InputSection>
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
          <S.TextInput
            error={errors.degree ? true : false}
            {...register("degree")}
            type="text"
            disabled={disabled}
          />
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
            {...register("description")}
            disabled={disabled}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
      </S.InputSection>

      <S.ButtonSection>
        {(disabled && education) && (
          <CrudButton onClick={handleDisableInput} action="edit">
            Editar
          </CrudButton>
        )}
        {(!disabled && education) && (
          <CrudButton onClick={handleDisableInput} action="cancel">
            Cancelar
          </CrudButton>
        )}
        {!disabled && <CrudButton type="submit" action="save">Salvar</CrudButton>}
      </S.ButtonSection>
    </S.EducationForm>
  );
};
