import React, { useEffect, useState } from "react";
//LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//STYLES
import * as S from "./styles";
//UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";
import { Skill } from "../../models/skill";
import CrudButton from "../shared/buttons/crud-button";
import { UpdateSkillData, CreateSkillData } from "../../assets/@types/global";
import { SkillLevelEnum } from "../../utils/enums/skill-level.enum";
import { SkillCategoryEnum } from "../../utils/enums/skill-category.enum";

const skillFormSchema = z.object({
  id: z.coerce.number().nullable(),
  name: z.string().min(3, FORM_MESSAGE.SKILL_NAME),
  level: z.nativeEnum(SkillLevelEnum),
  category: z.nativeEnum(SkillCategoryEnum),
  link: z.string().min(3, FORM_MESSAGE.SKILL_LINK)
});

type SkillFormData = z.infer<typeof skillFormSchema>;

type Props = {
  resumeId?: number;
  skill?: Skill;
  onEdit: (params: UpdateSkillData) => void;
  onCreate: (params: CreateSkillData) => void;
  onCancel: () => void;
};

export const SkillForm: React.FC<Props> = ({ resumeId, skill, onCancel, onCreate, onEdit }) => {
  const [disabled, setDisabled] = useState<boolean>(skill ? true : false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SkillFormData>({
    resolver: zodResolver(skillFormSchema),
  });

  const handleDisableInput = () => {
    setDisabled(!disabled);
  };

  const handleSubmitForm = async (data: SkillFormData) => {
    if (skill && data.id) {
      const { id, ...rest } = data;
      if (!id) {
        return;
      }
      onEdit({ ...rest, skillId: id });
    } else {
      if (!resumeId) {
        return;
      }

      const { id, ...rest } = data;
      onCreate({...rest, resumeId});
    }
    onCancel();
  };

  useEffect(() => {
    if (skill) {
      setDisabled(true);
      setValue("id", skill.id);
      setValue("name", skill.name);
      setValue("level", skill.level);
      setValue("category", skill.category);
      setValue("link", skill.link);
    } else {
      setDisabled(false);
      setValue("id", null);
      setValue("name", "");
      setValue("level", SkillLevelEnum.BEGINNER);
      setValue("category", SkillCategoryEnum.BACK);
      setValue("link", "");
    }
  }, [skill]);

  return (
    <S.SkillForm onSubmit={handleSubmit(handleSubmitForm)}>
      <S.Title>Habilidade:</S.Title>
      <S.InputSectionColumn>
        <div>
          <S.Label htmlFor="name">Nome</S.Label>
          <S.TextInput
            error={errors.name ? true : false}
            {...register("name")}
            type="text"
            disabled={disabled}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <S.Label htmlFor="level">Nível</S.Label>
          <S.SelectInput
            error={errors.level ? true : false}
            {...register("level")}
            disabled={disabled}
          >
            {Object.values(SkillLevelEnum).map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </S.SelectInput>
          {errors.level && <p>{errors.level.message}</p>}
        </div>
        <div>
          <S.Label htmlFor="category">Categoria</S.Label>
          <S.SelectInput
            error={errors.category ? true : false}
            {...register("category")}
            disabled={disabled}
          >
            {Object.values(SkillCategoryEnum).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </S.SelectInput>
          {errors.category && <p>{errors.category.message}</p>}
        </div>
        <div>
          <S.Label htmlFor="link">Link do Icone</S.Label>
          <S.TextInput
            error={errors.link ? true : false}
            {...register("link")}
            type="text"
            disabled={disabled}
          />
          {errors.link && <p>{errors.link.message}</p>}
        </div>
      </S.InputSectionColumn>

      <S.ButtonSection>
        {(disabled && skill) && (
          <CrudButton onClick={handleDisableInput} action="edit">
            Editar
          </CrudButton>
        )}
        {(!disabled && skill) && (
          <CrudButton onClick={handleDisableInput} action="cancel">
            Cancelar
          </CrudButton>
        )}
        {!disabled && <CrudButton type="submit" action="save">Salvar</CrudButton>}
      </S.ButtonSection>
    </S.SkillForm>
  );
};
