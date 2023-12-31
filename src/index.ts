import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { GetUserController } from "./controllers/get-users/get-users";
import express from "express";
import { config } from "dotenv";

config();

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();

  const getUserController = new GetUserController(mongoGetUsersRepository);

  const { body, statusCode } = await getUserController.handle();

  res.send(body).status(statusCode);
});
