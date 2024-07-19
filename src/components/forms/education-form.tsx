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
import { Education } from "../../models/education";

//HOOKS


const educationFormSchema = z.object({
  institutionName: z.string().min(3),
  degree: z.string().min(3),
  startDate: z.string(),
  endDate: z.string().optional(),
  description: z.string()
});

type EducationFormData = z.infer<typeof educationFormSchema>;

type Props = {
  education?: Education;
  isOpen: boolean;
};

export const EducationForm: React.FC<Props> = ({
  education,
  isOpen,
}) => {
  const [disabled, setDisabled] = useState<boolean>(education ? true : false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EducationFormData>({
    resolver: zodResolver(educationFormSchema),
  });

  // Disable input when action is view
  const handleDisableInput = () => {
    setDisabled(!disabled);
  };

  const handleSubmitForm = async (data: EducationFormData) => {
    // if (education && data.id) {
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
    // if (education) {
    //   onDelete({ id: education?.id });
    //   onClose();
    // }
  };

  useEffect(() => {
    if (education) {
      setDisabled(true);
      setValue("institutionName", education.institutionName);
      setValue("degree", education.degree);
      setValue("startDate", education.startDate);
      setValue("endDate", education.endDate);
      setValue("description", education.description);
    } else {
      setDisabled(false);
      setValue("institutionName", "");
      setValue("degree", "");
      setValue("startDate", "");
      setValue("endDate", "");
      setValue("description", "");
    }
  }, [education, isOpen]);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <label htmlFor=""></label><input {...register("institutionName")} type="text" />
      </div>

      <div>
        <label htmlFor=""></label>
        <input {...register("degree")} type="text"></input>
      </div>

      <div>
        <label htmlFor=""></label>
        <input {...register("startDate")} type="date"></input>
      </div>

      <div>
        <label htmlFor=""></label>
        <input {...register("endDate")} type="date"></input>
      </div>

      <div>
        <label htmlFor=""></label>
        <textarea {...register("description")}></textarea>
      </div>
    </form>
  );
};
