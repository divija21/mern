import express from "express"
import {loginUser,registerUser} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);

export default userRouter;
//express is the library of node.js that is used for creatigng server side application