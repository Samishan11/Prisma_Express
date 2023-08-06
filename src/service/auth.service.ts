import { Response } from "express";
import { prisma } from "../../prisma/prismaClient";
import { IUserData } from "../controller/auth.controller/auth.controller";
import { hashPassword } from "../utils/hasPassword";

export class Auth {
  static async register(data: IUserData): Promise<string> {
    const { username, email, password, boi } = data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      await prisma.user.create({
        data,
      });
      return "user created sucessfully";
    }
    return "user already exist";
  }
  static async login(data: {
    email: string;
    password: string;
  }): Promise<string> {
    const { email, password } = data;
    const user = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });
    if (user) {
      return "User login";
    }
    return "email or password not match";
  }
  static async getAllUser(): Promise<any> {
    const user = await prisma.user.findMany();
    return user;
  }
}
