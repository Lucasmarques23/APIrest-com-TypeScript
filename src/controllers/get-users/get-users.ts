import { IGetController, IGetUsersRepository } from "./protocols";

export class GetUserController implements IGetController {
  getUsersRepository: IGetUsersRepository;

  constructor(GetUsersRepository: IGetUsersRepository) {
    this.getUsersRepository = GetUsersRepository;
  }
  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
