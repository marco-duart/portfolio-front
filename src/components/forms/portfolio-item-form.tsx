import React, { useEffect, useState } from "react";
// LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// STYLES
import * as S from "./styles";
// UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";
import { PortfolioItem } from "../../models/portfolio-item";
import CrudButton from "../shared/buttons/crud-button";
import {
  UpdatePortfolioItemData,
  CreatePortfolioItemData,
  DeletePortfolioItemData,
  UploadPortfolioPhotoData,
} from "../../assets/@types/global";
import { MinusCircle } from "@styled-icons/evaicons-solid";
import BaseIcon from "../shared/icons/base-icon";
import PhotoDropzone from "../photo-dropzone/photo-dropzone";

const portfolioItemFormSchema = z.object({
  id: z.number().nullable(),
  name: z.string().min(3, FORM_MESSAGE.PORTFOLIO_ITEM_NAME),
  description: z.string().min(3, FORM_MESSAGE.PORTFOLIO_ITEM_DESCRIPTION),
  technologies: z.string().min(3, FORM_MESSAGE.PORTFOLIO_ITEM_TECHNOLOGIES),
});

type PortfolioItemFormData = z.infer<typeof portfolioItemFormSchema>;

type Props = {
  userId?: number;
  portfolioItem?: PortfolioItem;
  onEdit: (params: UpdatePortfolioItemData) => void;
  onCreate: (params: CreatePortfolioItemData) => void;
  onDelete: (params: DeletePortfolioItemData) => void;
  onUpload?: (params: UploadPortfolioPhotoData) => void;
  onCancel: () => void;
};

export const PortfolioItemForm: React.FC<Props> = ({
  userId,
  portfolioItem,
  onCancel,
  onCreate,
  onEdit,
  onDelete,
  onUpload,
}) => {
  const [disabled, setDisabled] = useState<boolean>(
    portfolioItem ? true : false
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PortfolioItemFormData>({
    resolver: zodResolver(portfolioItemFormSchema),
  });

  const handleDisableInput = () => {
    setDisabled(!disabled);
  };

  const handleSubmitForm = async (data: PortfolioItemFormData) => {
    if (portfolioItem && data.id) {
      const { id, ...rest } = data;
      if (!id) {
        return;
      }
      onEdit({ ...rest, portfolioItemId: id });
    } else {
      if (!userId) {
        return;
      }

      const { id, ...rest } = data;
      onCreate({ ...rest, userId });
    }
    onCancel();
  };

  const handleDeleteForm = async () => {
    if (portfolioItem && portfolioItem.id) {
      onDelete({ portfolioItemId: portfolioItem.id });
    }
  };

  useEffect(() => {
    if (portfolioItem) {
      setDisabled(true);
      setValue("id", portfolioItem.id);
      setValue("name", portfolioItem.name);
      setValue("description", portfolioItem.description);
      setValue("technologies", portfolioItem.technologies);
    } else {
      setDisabled(false);
      setValue("id", null);
      setValue("name", "");
      setValue("description", "");
      setValue("technologies", "");
    }
  }, [portfolioItem]);

  return (
    <S.PortfolioItemForm onSubmit={handleSubmit(handleSubmitForm)}>
      <S.HeaderIconSection>
        {!portfolioItem && (
          <BaseIcon
            icon={MinusCircle}
            text=""
            expanded={false}
            handleClick={onCancel}
            link={""}
          />
        )}
      </S.HeaderIconSection>
      <S.Title>Id: {portfolioItem?.id}</S.Title>
      <S.InputSectionColumn>
        <div>
          <S.Label htmlFor="name">Nome do Projeto</S.Label>
          <S.TextInput
            error={errors.name ? true : false}
            {...register("name")}
            type="text"
            disabled={disabled}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <S.Label htmlFor="description">Descrição</S.Label>
          <S.TextInput
            error={errors.description ? true : false}
            {...register("description")}
            type="text"
            disabled={disabled}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div>
          <S.Label htmlFor="technologies">Tecnologias</S.Label>
          <S.TextInput
            error={errors.technologies ? true : false}
            {...register("technologies")}
            type="text"
            disabled={disabled}
          />
          {errors.technologies && <p>{errors.technologies.message}</p>}
        </div>
      </S.InputSectionColumn>

      <S.ButtonSection>
        {disabled && portfolioItem && (
          <CrudButton onClick={handleDisableInput} action="edit">
            Editar
          </CrudButton>
        )}
        {disabled && portfolioItem && (
          <CrudButton onClick={handleDeleteForm} action="delete">
            Excluir
          </CrudButton>
        )}
        {!disabled && portfolioItem && (
          <CrudButton onClick={handleDisableInput} action="cancel">
            Cancelar
          </CrudButton>
        )}
        {!disabled && (
          <CrudButton type="submit" action="save">
            Salvar
          </CrudButton>
        )}
      </S.ButtonSection>
      <S.ButtonSection>
        {portfolioItem && onUpload && (
          <PhotoDropzone
            uploadPhoto={onUpload}
            portfolioItemId={portfolioItem.id}
          />
        )}
      </S.ButtonSection>
    </S.PortfolioItemForm>
  );
};
