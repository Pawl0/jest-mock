import { UserRepository, UserModel, Signup } from "./signup.protocols";

export class SignUpUseCase implements Signup {
  constructor(private userRepository: UserRepository) {}

  add({ name, age, work }: UserModel): UserModel | string {
    const checkUserExists = this.userRepository.get({ name });

    if (<UserModel>checkUserExists) {
      return "User already created.";
    }

    const createUser = this.userRepository.create({
      name,
      age,
      work,
    });

    return createUser;
  }
}
