import { UserRepository } from "data/protocols/userRepository";
import { UserModel } from "domain/models/user";
import { SignUpUseCase } from "./signup.useCase";

const makeUserRepository = (): UserRepository => {
  const fakeUser = {
    name: "Paulo",
    age: 23,
    work: "Desenvolvedor",
  };

  class UserRepositoryStub implements UserRepository {
    create(data: UserModel): UserModel {
      return fakeUser;
    }

    get(data?: Partial<UserModel>): UserModel {
      return;
    }

    getMany(data?: Partial<UserModel>): UserModel[] {
      const users: UserModel[] = Array(3).fill(fakeUser);

      return users;
    }
  }

  return new UserRepositoryStub();
};

const makeSut = () => {
  const makeUserRepositoryStub = makeUserRepository();

  const sut = new SignUpUseCase(makeUserRepositoryStub);

  return {
    userRepositoryStub: makeUserRepositoryStub,
    sut,
  };
};

describe("Signup use case test", () => {
  it("should call create user", () => {
    const { sut } = makeSut();

    const newUser: UserModel = {
      name: "any_name",
      age: 0,
      work: "any_work",
    };

    const createdUser = sut.add(newUser);

    expect(createdUser).toBeDefined();
  });

  it("should throw if user is already created", () => {
    const { sut, userRepositoryStub } = makeSut();

    const user = {
      name: "Paulo",
      age: 23,
      work: "Desenvolvedor",
    };

    jest.spyOn(userRepositoryStub, "get").mockReturnValue(user);

    const errorCreate = sut.add(user);

    expect(errorCreate).toEqual("User already created.");
  });
});
