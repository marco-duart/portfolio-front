import * as S from "./styles";
import { PortfolioItem } from "../../models/portfolio-item";
import { PortfolioPhoto } from "../../models/portfolio-photo";

type Props = {
  portfolioItems: undefined | (PortfolioItem & { photos: PortfolioPhoto[] })[];
};

export const Portfolio: React.FC<Props> = ({ portfolioItems }) => {
  return (
    <S.Container>
      <S.Title>Projetos</S.Title>
      <S.PortfolioCardContainer>
        {portfolioItems?.map((item) => (
          <S.PortfolioCardWrapper key={item.id}>
            <S.PortfolioCard>
              <img src={item.photos[0]?.photoUrl} alt={item.name} />
              <h4>{item.name}</h4>
            </S.PortfolioCard>
          </S.PortfolioCardWrapper>
        ))}
      </S.PortfolioCardContainer>
    </S.Container>
  );
};
