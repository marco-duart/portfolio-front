/* eslint-disable @typescript-eslint/no-namespace */
import { User } from "../../models/user";

export namespace LoginDTO {
  export type IParams = {
    email: string;
    password: string;
  };
  export type IResponse = {
    token: string;
    user: User;
  };
}

export namespace RegisterDTO {
  export type IParams = {
    name: string;
    email: string;
    password: string;
  };

  export type IResponse = User & {
    password: string;
  };
}

export namespace MeDTO {
  export type IParams = {
    token: string;
  };
  export type IResponse = User;
}
