import { useEffect, useState } from "react";

import { useUserContext } from "../../hooks/user/use-user-context";
import {
  DeleteEntity,
  GetEntities,
  CreateEntity,
  UpdateEntity,
  GetEntity,
} from "../../services/entity/index";

import { Entity } from "../../services/entity/DTO";

type State = {
  entities: undefined | Entity[];
};

const INITIAL_STATE = {
  entities: undefined,
};

export type CreateEntityData = {

};

export type UpdateEntityData = {
  id: number;
  business_name: string;
  sector: string;
  entity_size: number;
  entity_location: string;
};

export type DeleteEntityData = {
  id: number;
};

export const useEntityCrud = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);
  const { token } = useUserContext();

  const fetchEntities = async () => {
    if (!token) {
      return;
    }

    const { entities } = await GetEntities({ token });
    setState({ entities });
  };

  const createEntity = async (data: CreateEntityData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await CreateEntity(params);
    fetchEntities();
  };

  const deleteEntity = async (data: DeleteEntityData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await DeleteEntity(params);
    fetchEntities();
  };

  const updateEntity = async (data: UpdateEntityData) => {
    if (!token) {
      return;
    }

    const params = { ...data, token };
    await UpdateEntity(params);
    fetchEntities();
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  return {
    entities: state.entities,
    createEntity,
    deleteEntity,
    updateEntity,
  };
};
