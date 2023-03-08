import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { routes } from "./routes";

dotenv.config();

const server = express();

// ---- Midlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

// ------------
server.use(routes);

server.listen(process.env.API_PORT, () => {
  console.log(
    `Server running in ${process.env.API_HOST}:${process.env.API_PORT}`
  );
});
