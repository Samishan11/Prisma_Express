import { Response, Request } from "express";
import { Auth } from "../../service/auth.service";

export type IUserData = {
  username: string;
  email: string;
  password: string;
  name: string;
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password, name }: IUserData = req.body;
    const data = { username, email, password, name };
    var response = await Auth.register(data);
    res.json({
      message: response,
    });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    var response = await Auth.getAllUser();
    res.json({
      data: response,
    });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
