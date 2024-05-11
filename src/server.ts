import cors from "cors";
import express from "express";
import morgan from "morgan";
import { router } from './ecommerce'; 

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(router); 

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Ecommerce API listening on http://localhost:${PORT}`);
});
