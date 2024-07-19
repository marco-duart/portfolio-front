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
import { Skill } from "../../models/skill";

//HOOKS


const skillFormSchema = z.object({
  name: z.string().min(3),
  level: z.string().min(3)
});

type SkillFormData = z.infer<typeof skillFormSchema>;

type Props = {
  skill?: Skill;
  isOpen: boolean;
};

export const SkillForm: React.FC<Props> = ({
  skill,
  isOpen,
}) => {
  const [disabled, setDisabled] = useState<boolean>(skill ? true : false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SkillFormData>({
    resolver: zodResolver(skillFormSchema),
  });

  // Disable input when action is view
  const handleDisableInput = () => {
    setDisabled(!disabled);
  };

  const handleSubmitForm = async (data: SkillFormData) => {
    // if (skill && data.id) {
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
    // if (skill) {
    //   onDelete({ id: skill?.id });
    //   onClose();
    // }
  };

  useEffect(() => {
    if (skill) {
      setDisabled(true);
      setValue("name", skill.name);
      setValue("level", skill.level);
    } else {
      setDisabled(false);
      setValue("name", "");
      setValue("level", "");
    }
  }, [skill, isOpen]);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <label htmlFor=""></label><input {...register("name")} type="text" />
      </div>
      
      <div>
        <label htmlFor=""></label>
        <input {...register("level")} type="text"></input>
      </div>
    </form>
  );
};
