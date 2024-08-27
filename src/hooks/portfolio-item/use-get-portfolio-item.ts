import { useEffect, useState } from "react";
import { GetPortfolioItems } from "../../services/portfolio/index";
import { PortfolioItem } from "../../models/portfolio-item";
import { PortfolioPhoto } from "../../models/portfolio-photo";

type State = {
  portfolioItems: undefined | (PortfolioItem & { photos: PortfolioPhoto[] })[];
};

const INITIAL_STATE = {
  portfolioItems: undefined,
};

export const useGetPortfolioItem = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchPortfolioItems = async () => {
    const { portfolioItems } = await GetPortfolioItems({});
    setState({ portfolioItems });
  };

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  return {
    portfolioItems: state.portfolioItems,
  };
};
