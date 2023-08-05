import { Router } from "express";
import { getUsers, registerUser } from "../controller/auth.controller/auth.controller";
const router = Router();

//  auth
router.post("/register", registerUser);
router.get("/getUsers", getUsers);

export { router };
