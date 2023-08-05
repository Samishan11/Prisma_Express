import { Response, Request } from "express";
import { Auth } from "../../service/auth.service";

export type IUserData = {
  username: string;
  email: string;
  password: string;
  name: string;
  boi: string;
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password, name, boi }: IUserData = req.body;
    const data = { username, email, password, name, boi };
    var response = await Auth.register(data);
    res.json({
      message: response,
    });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password }: any = req.body;
    const data = { email, password };
    var response = await Auth.login(data);
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
