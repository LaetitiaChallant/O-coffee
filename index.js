import "dotenv/config";
import express from "express";

import path from "path";
import router from "./app/router.js";

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname,'app/views'));

app.use(express.static(path.join(import.meta.dirname, "public")));

app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});