import { useEffect, useState } from "react";
import { useUserContext } from "../user/use-user-context";
import {
  DeletePortfolioItem,
  GetPortfolioItems,
  CreatePortfolioItem,
  UpdatePortfolioItem,
  GetPortfolioItem,
} from "../../services/portfolio/index";
import { PortfolioItem } from "../../models/portfolio-item";
import {
  CreatePortfolioItemData,
  DeletePortfolioItemData,
  UpdatePortfolioItemData,
} from "../../assets/@types/global";

type State = {
  portfolioItems: undefined | PortfolioItem[];
};

const INITIAL_STATE = {
  portfolioItems: undefined,
};

export const usePortfolioItemCrud = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);
  const { token } = useUserContext();

  const fetchPortfolioItems = async () => {
    const { portfolioItems } = await GetPortfolioItems({});
    setState({ portfolioItems });
  };

  const createPortfolioItem = async (data: CreatePortfolioItemData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await CreatePortfolioItem(params);
    fetchPortfolioItems();
  };

  const deletePortfolioItem = async (data: DeletePortfolioItemData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await DeletePortfolioItem(params);
    fetchPortfolioItems();
  };

  const updatePortfolioItem = async (data: UpdatePortfolioItemData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await UpdatePortfolioItem(params);
    fetchPortfolioItems();
  };

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  return {
    portfolioItems: state.portfolioItems,
    createPortfolioItem,
    deletePortfolioItem,
    updatePortfolioItem,
  };
};
