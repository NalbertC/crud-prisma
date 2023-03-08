import { Router } from "express";
import UserControlers from "../controllers/UserControlers";

const userRoutes = Router();

userRoutes.get("/users", UserControlers.index);
userRoutes.post("/users", UserControlers.create);
userRoutes.put("/users/:id", UserControlers.update);
userRoutes.delete("/users/:id", UserControlers.destroy);

export { userRoutes };
