//NATIVE
import React, { useEffect, useState } from "react";
//LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//COMPONENTS


//STYLES
import * as S from "./styles";
//UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";
import { Resume } from "../../models/resume";

//HOOKS


const resumeFormSchema = z.object({
  title: z.string().min(3, FORM_MESSAGE.RESUME_TITLE),
  summary: z.string().min(3, FORM_MESSAGE.RESUME_SUMMARY)
});

type ResumeFormData = z.infer<typeof resumeFormSchema>;

type Props = {
  resume?: Resume;
  isOpen: boolean;
};

export const ResumeForm: React.FC<Props> = ({
  resume,
  isOpen,
}) => {
  const [disabled, setDisabled] = useState<boolean>(resume ? true : false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ResumeFormData>({
    resolver: zodResolver(resumeFormSchema),
  });

  // Disable input when action is view
  const handleDisableInput = () => {
    setDisabled(!disabled);
  };

  const handleSubmitForm = async (data: ResumeFormData) => {
    // if (resume && data.id) {
    //   const { id, ...rest } = data;
    //   if (!id) {
    //     return;
    //   }
    //   onEdit({ ...rest, id });
    // } else {
    //   const { id, ...rest } = data;
    //   onCreate(rest);
    // }
    // onClose();
  };

  const handleDeleteForm = async () => {
    // if (resume) {
    //   onDelete({ id: resume?.id });
    //   onClose();
    // }
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
  }, [resume, isOpen]);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <label htmlFor=""></label><input {...register("title")} type="text" />
      </div>
      <div>
        <label htmlFor=""></label>
        <textarea {...register("summary")}></textarea>
      </div>
    </form>
  );
};