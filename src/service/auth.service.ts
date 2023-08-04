import { Response } from "express";
import { prisma } from "../../prisma/prismaClient";
import bcrypt from "bcryptjs";
type IUserData = {
  username: string;
  email: string;
  password: string;
};

export class Auth {
  static async register(data: IUserData): Promise<void> {
    const { username, email, password } = data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      data.password = bcrypt.hashSync(data.password, 8);
      let user = await prisma.user.create({
        data,
      });
      return "user created sucessfully";
    }
    return "user already exist";
  }
}
