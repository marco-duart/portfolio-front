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

const resumeFormSchema = z.object({
  title: z.string().min(3, FORM_MESSAGE.RESUME_TITLE),
  summary: z.string().min(3, FORM_MESSAGE.RESUME_SUMMARY),
});

type ResumeFormData = z.infer<typeof resumeFormSchema>;

type Props = {
  resume?: Resume;
};

export const ResumeForm: React.FC<Props> = ({ resume }) => {
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
    // Handle form submission logic here
  };

  const handleDeleteForm = async () => {
    // Handle form deletion logic here
  };

  useEffect(() => {
    if (resume) {
      setDisabled(true);
      setValue("title", resume.title);
      setValue("summary", resume.summary);
    } else {
      setDisabled(false);
      setValue("title", "");
      setValue("summary", "");
    }
  }, [resume]);

  return (
    <S.ResumeForm onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <div>
          <label htmlFor="title">Title</label>
          <S.TextInput
            error={errors.title ? true : false}
            {...register("title")}
            type="text"
            disabled={disabled}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label htmlFor="summary">Summary</label>
          <S.TextArea
            error={errors.summary ? true : false}
            {...register("summary")}
            disabled={disabled}
          />
          {errors.summary && <p>{errors.summary.message}</p>}
        </div>
      </div>

      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleDisableInput}>
          {disabled ? "Enable Editing" : "Disable Editing"}
        </button>
      </div>
    </S.ResumeForm>
  );
};
