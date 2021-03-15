import { UserModel } from "../../domain/models/user";

export interface UserRepository {
  create(data: UserModel): UserModel;
  get(data?: Partial<UserModel>): UserModel;
  getMany(data?: Partial<UserModel>): UserModel[];
}
