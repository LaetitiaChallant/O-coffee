import "dotenv/config";
import express from "express";

import path from "path";

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static(path.join(import.meta.dirname, "public")));

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(import.meta.dirname, '/public/integration')
  });
});
app.get('/shop', (req, res) => {
  res.sendFile('shop.html', {
    root: path.join(import.meta.dirname, '/public/integration')
  });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});