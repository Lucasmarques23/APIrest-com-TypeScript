import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        fistName: "Lucas",
        lastName: "Marques",
        email: "lucas@gmail.com",
        password: "123",
      },
    ];
  }
}
