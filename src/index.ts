  import express from 'express';
  import { config } from 'dotenv';

  config();

  const app = express();

  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

  app.get('/', (req, res) => {
    res.send("Hello World!")
  })