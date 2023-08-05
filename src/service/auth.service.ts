import { Response } from "express";
import { prisma } from "../../prisma/prismaClient";
// import bcrypt from "bcryptjs";
import { IUserData } from "../controller/auth.controller/auth.controller";

export class Auth {
  static async register(data: IUserData): Promise<string> {
    const { username, email, password } = data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      // data.password = bcrypt.hashSync(data.password, 8);
      await prisma.user.create({
        data,
      });
      return "user created sucessfully";
    }
    return "user already exist";
  }
  static async getAllUser(): Promise<any> {
    const user = await prisma.user.findMany();
    return user;
  }
}
