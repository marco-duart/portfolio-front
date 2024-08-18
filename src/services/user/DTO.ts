import { User } from "../../models/user";

export namespace GetUserDTO {
  export type IParams = {
    userId: number;
  };
  export type IResponse =  User;
}