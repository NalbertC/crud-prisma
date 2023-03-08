import { Router } from "express";
import { userRoutes } from "./routes/user.routes";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ hello: "mundo" });
});

routes.use(userRoutes);

export { routes };
