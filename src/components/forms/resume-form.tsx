import React, { useEffect, useState } from "react";
//LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//STYLES
import * as S from "./styles";
//UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";
import { Resume } from "../../models/resume";
import CrudButton from "../shared/buttons/crud-button";
import { UpdateResumeData, CreateResumeData } from "../../assets/@types/global";

const resumeFormSchema = z.object({
  id: z.coerce.number().nullable(),
  title: z.string().min(3, FORM_MESSAGE.RESUME_TITLE),
  summary: z.string().min(3, FORM_MESSAGE.RESUME_SUMMARY),
});

type ResumeFormData = z.infer<typeof resumeFormSchema>;

type Props = {
  resume?: Resume;
  onEdit: (params: UpdateResumeData) => void;
  onCreate: (params: CreateResumeData) => void;
  onCancel: () => void;
};

export const ResumeForm: React.FC<Props> = ({ resume, onCancel, onCreate, onEdit }) => {
  const [disabled, setDisabled] = useState<boolean>(resume ? true : false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ResumeFormData>({
    resolver: zodResolver(resumeFormSchema),
  });

  const handleDisableInput = () => {
    setDisabled(!disabled);
  };

  const handleSubmitForm = async (data: ResumeFormData) => {
    if (resume && data.id) {
      const { id, ...rest } = data;
      if (!id) {
        return;
      }
      onEdit({ ...rest, resumeId: id });
    } else {
      const { id, ...rest } = data;
      onCreate(rest);
    }
    onCancel();
  };

  useEffect(() => {
    if (resume) {
      setDisabled(true);
      setValue("id", resume.id);
      setValue("title", resume.title);
      setValue("summary", resume.summary);
    } else {
      setDisabled(false);
      setValue("id", null);
      setValue("title", "");
      setValue("summary", "");
    }
  }, [resume]);

  return (
    <S.ResumeForm onSubmit={handleSubmit(handleSubmitForm)}>
      <S.Title>Resumo:</S.Title>
      <S.InputSectionRow>
        <div>
          <S.Label htmlFor="title">Título</S.Label>
          <S.TextInput
            error={errors.title ? true : false}
            {...register("title")}
            type="text"
            disabled={disabled}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <S.Label htmlFor="summary">Descrição</S.Label>
          <S.TextArea
            error={errors.summary ? true : false}
            {...register("summary")}
            disabled={disabled}
          />
          {errors.summary && <p>{errors.summary.message}</p>}
        </div>
      </S.InputSectionRow>

      <S.ButtonSection>
        {(disabled && resume) && (
          <CrudButton onClick={handleDisableInput} action="edit">
            Editar
          </CrudButton>
        )}
        {(!disabled && resume) && (
          <CrudButton onClick={handleDisableInput} action="cancel">
            Cancelar
          </CrudButton>
        )}
        {!disabled && <CrudButton type="submit" action="save">Salvar</CrudButton>}
      </S.ButtonSection>
    </S.ResumeForm>
  );
};
