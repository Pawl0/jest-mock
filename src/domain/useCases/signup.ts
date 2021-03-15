import { UserModel } from "../models/user";

export interface Signup {
  add(data: UserModel): UserModel | string;
}
