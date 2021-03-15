import { UserRepository } from "../../data/protocols/userRepository";
import { UserModel } from "../../domain/models/user";

export class UserLocalRepository implements UserRepository {
  users: UserModel[];

  constructor() {
    this.users = [];
  }

  create(data: UserModel): UserModel {
    const createUser: UserModel = data;

    this.users.push(createUser);

    return createUser;
  }

  get(data?: Partial<UserModel>): UserModel {
    const getUser = this.users.find((value) => (!data ? [] : value === data));

    return getUser;
  }

  getMany(data?: Partial<UserModel>): UserModel[] {
    const getUsers = this.users.filter((value) =>
      !data ? this.users : value === data
    );

    return getUsers;
  }
}
