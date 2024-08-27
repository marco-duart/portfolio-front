import * as S from "./styles";
import { PortfolioItem } from "../../models/portfolio-item";
import { PortfolioPhoto } from "../../models/portfolio-photo";
import { useState } from "react";
import BaseModal from "../../components/shared/modal/base-modal";

type Props = {
  portfolioItems: undefined | (PortfolioItem & { photos: PortfolioPhoto[] })[];
};

export const Portfolio: React.FC<Props> = ({ portfolioItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [portfolioItem, setPortfolioItem] = useState<undefined | PortfolioItem & { photos: PortfolioPhoto[] }>(undefined)

  const handleModal = () => {
    setIsOpen(false)
  }

  const handlePortfolioItem = (portfolioItem: PortfolioItem & { photos: PortfolioPhoto[] }) => {
    setPortfolioItem(portfolioItem)
    setIsOpen(true)
  }

  return (
    <S.Container>
      <S.Title>Projetos</S.Title>
      <S.PortfolioCardContainer>
        {portfolioItems?.map((item) => (
          <S.PortfolioCardWrapper key={item.id}>
            <S.PortfolioCard onClick={() => handlePortfolioItem(item)}>
              <img src={item.photos[0]?.photoUrl} alt={item.name} />
              <h4>{item.name}</h4>
            </S.PortfolioCard>
          </S.PortfolioCardWrapper>
        ))}
      </S.PortfolioCardContainer>
      <BaseModal isOpen={isOpen} onClose={handleModal} title={portfolioItem?.name}>
      <S.CarouselSection>
                <h4>Total de fotos: {portfolioItem?.photos?.length}</h4>
                <S.StyledCarousel
                  showArrows={true}
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  useKeyboardArrows={true}
                >
                  {portfolioItem?.photos?.map((photo) => (
                    <S.CarouselItem key={photo.id}>
                      <img src={photo.photoUrl} />
                    </S.CarouselItem>
                  ))}
                </S.StyledCarousel>
              </S.CarouselSection>
      </BaseModal>
    </S.Container>
  );
};
