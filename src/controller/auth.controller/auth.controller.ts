import { Response, Request } from "express";
import { Auth } from "../../service/auth.service";

export const registerUser = async (req: Request, res: Response) => {
  try {
    var response = await Auth.register();
    res.json({
      message: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
