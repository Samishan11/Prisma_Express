import { Router } from "express";
import {
  getUsers,
  loginUser,
  registerUser,
} from "../controller/auth.controller/auth.controller";
const router = Router();

//  auth
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUsers", getUsers);

export { router };
