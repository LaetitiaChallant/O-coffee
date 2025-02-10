import express from "express";
import "dotenv/config";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Word');
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
});