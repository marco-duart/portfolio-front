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
import { Experience } from "../../models/experience";

//HOOKS


const experienceFormSchema = z.object({
  companyName: z.string().min(3),
  role: z.string().min(3),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
});

type ExperienceFormData = z.infer<typeof experienceFormSchema>;

type Props = {
  experience?: Experience;
  isOpen: boolean;
};

export const ExperienceForm: React.FC<Props> = ({
  experience,
  isOpen,
}) => {
  const [disabled, setDisabled] = useState<boolean>(experience ? true : false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ExperienceFormData>({
    resolver: zodResolver(experienceFormSchema),
  });

  // Disable input when action is view
  const handleDisableInput = () => {
    setDisabled(!disabled);
  };

  const handleSubmitForm = async (data: ExperienceFormData) => {
    // if (experience && data.id) {
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
    // if (experience) {
    //   onDelete({ id: experience?.id });
    //   onClose();
    // }
  };

  useEffect(() => {
    if (experience) {
      setDisabled(true);
      setValue("companyName", experience.companyName);
      setValue("role", experience.role);
      setValue("startDate", experience.startDate);
      setValue("endDate", experience.endDate);
      setValue("description", experience.description);
    } else {
      setDisabled(false);
      setValue("companyName", "");
      setValue("role", "");
      setValue("startDate", "");
      setValue("endDate", "");
      setValue("description", "");
    }
  }, [experience, isOpen]);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <label htmlFor=""></label><input {...register("companyName")} type="text" />
      </div>

      <div>
        <label htmlFor=""></label>
        <input {...register("role")} type="text"></input>
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
