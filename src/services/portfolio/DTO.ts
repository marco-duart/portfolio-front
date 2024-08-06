import { PortfolioItem } from "../../models/portfolio-item";
import { PortfolioPhoto } from "../../models/portfolio-photo";

export namespace CreatePortfolioItemDTO {
  export type IParams = {
    userId: number;
    name: string;
    description: string;
    technologies: string;
    token: string;
  };
  export type IResponse = PortfolioItem;
}

export namespace GetPortfolioItemsDTO {
  export type IParams = {
  };
  export type IResponse = (PortfolioItem & { photos: PortfolioPhoto[] })[];
}

export namespace GetPortfolioItemDTO {
  export type IParams = {
    portfolioItemId: number;
  };
  export type IResponse = PortfolioItem & { photos: PortfolioPhoto[] };
}

export namespace UpdatePortfolioItemDTO {
  export type IParams = {
    portfolioItemId: number;
    name?: string;
    description?: string;
    technologies?: string;
    token: string;
  };
  export type IResponse = PortfolioItem;
}

export namespace DeletePortfolioItemDTO {
  export type IParams = {
    portfolioItemId: number;
    token: string;
  };
  export type IResponse = {
    message: string;
    error: boolean;
  };
}
