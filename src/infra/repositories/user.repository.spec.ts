import { UserLocalRepository } from "../repositories/user.repository";

const userRepository = new UserLocalRepository();

describe("User repository test", () => {
  it("should create an user", () => {
    const user = {
      name: "any_name",
      age: 0,
      work: "any_work",
    };

    const createdUser = userRepository.create(user);

    expect(createdUser).toBeDefined();
    expect(createdUser.name).toBe("any_name");
    expect(createdUser.age).toEqual(0);
    expect(createdUser.work).toEqual("any_work");
  });

  it("should return a user", () => {
    const createUser = userRepository.create({
      name: "any_name",
      age: 0,
      work: "any_work",
    });

    const user = userRepository.get(createUser);

    expect(user).toBeTruthy();
    expect(user.name).toBe("any_name");
    expect(user.work).toBe("any_work");
  });

  it("should return a user if data is undefined", () => {
    const createUser = userRepository.create({
      name: "any_name",
      age: 0,
      work: "any_work",
    });

    const user = userRepository.get();

    expect(user).toBeTruthy();
    expect(user.name).toBe("any_name");
    expect(user.work).toBe("any_work");
  });

  it("should return an array of users", () => {
    const createUser = {
      name: "any_name",
      age: 0,
      work: "any_work",
    };

    for (let count = 0; count <= 3; count++) {
      userRepository.create(createUser);
    }

    const users = userRepository.getMany(createUser);

    expect(users).toBeTruthy();
    expect(users).toBeInstanceOf(Array);
    expect(users[0].name).toBe("any_name");
    expect(users[0].work).toBe("any_work");
  });

  it("should return an array of users if data is undefined", () => {
    const createUser = {
      name: "any_name",
      age: 0,
      work: "any_work",
    };

    for (let count = 0; count <= 3; count++) {
      userRepository.create(createUser);
    }

    const users = userRepository.getMany();

    expect(users).toBeTruthy();
    expect(users).toBeInstanceOf(Array);
    expect(users[0].name).toBe("any_name");
    expect(users[0].work).toBe("any_work");
  });
});
