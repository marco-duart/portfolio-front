import React, { useState } from "react";
import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import { usePortfolioItemCrud, useUserContext } from "../../hooks";
import BaseCard from "../../components/shared/cards/base-card";
import { PortfolioItemForm } from "../../components/forms/portfolio-item-form";
import { PlusCircle } from "@styled-icons/evaicons-solid";
import BaseIcon from "../../components/shared/icons/base-icon";

export const Profile: React.FC = () => {
  const { user } = useUserContext()
  const {
    portfolioItems,
    createPortfolioItem,
    deletePortfolioItem,
    updatePortfolioItem,
  } = usePortfolioItemCrud();
  const [showNewPortfolioItemForm, setShowNewPortfolioItemForm] =
    useState(false);

  const handleAddNewPortfolioItem = () => {
    setShowNewPortfolioItemForm(true);
  };

  const handleCancelNewPortfolioItem = () => {
    setShowNewPortfolioItemForm(false);
  };

  return (
    <S.Container>
      <S.Title>Portfólio</S.Title>
      <hr />
      <S.Section>
        <S.SubTitle>Itens do Portfólio:</S.SubTitle>
        <hr />
        <div>
          {portfolioItems?.map((portfolioItem, index) => (
            <BaseCard key={index} size="large">
              <PortfolioItemForm
                portfolioItem={portfolioItem}
                onCreate={createPortfolioItem}
                onEdit={updatePortfolioItem}
                onDelete={deletePortfolioItem}
                onCancel={handleCancelNewPortfolioItem}
              />
              <S.CarouselSection>
              <S.StyledCarousel
              showArrows={true} 
              showStatus={false} 
              showIndicators={false} 
              showThumbs={false} 
              infiniteLoop={true}
              useKeyboardArrows={true}
              width={"100%"}
              >
              {portfolioItem.photos?.map((photo) => (
                  <S.CarouselItem key={photo.id}>
                    <img src={photo.photoUrl} />
                  </S.CarouselItem>
              ))}
              </S.StyledCarousel>
              </S.CarouselSection>
            </BaseCard>
          ))}
          {showNewPortfolioItemForm && (
            <BaseCard size="large">
              <PortfolioItemForm
                userId={user?.id}
                onCreate={createPortfolioItem}
                onEdit={updatePortfolioItem}
                onDelete={deletePortfolioItem}
                onCancel={handleCancelNewPortfolioItem}
              />
            </BaseCard>
          )}
          <BaseIcon
            icon={PlusCircle}
            text=""
            expanded={false}
            handleClick={handleAddNewPortfolioItem}
            link={""}
          />
        </div>
      </S.Section>
    </S.Container>
  );
};
