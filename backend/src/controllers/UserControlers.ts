import { Request, Response } from "express";
import { prisma } from "../database";

export default {
  async index(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();

      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error");
    }
  },
  async create(req: Request, res: Response) {
    try {
      const { name, email } = req.body;

      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (user) {
        return res.status(302).json("User found");
      }

      const newUser = await prisma.user.create({
        data: {
          email,
          name,
        },
      });

      if (newUser) {
        return res.status(201).json("User created");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error");
    }
  },
  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const { name, email } = req.body;

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        return res.status(404).json("Not Found!");
      }

      const updateUser = await prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
          email,
        },
      });

      return res.json("Updated!");
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error");
    }
  },

  async destroy(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        return res.status(404).json("Not Found!");
      }

      const deleteUser = await prisma.user.delete({
        where: {
          id,
        },
      });

      return res.json("Delected");
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error");
    }
  },
};
