import express from "express"
import { loginUser, registerUser } from "../controllers/userController.js"
import { create } from "../validationSchema/index.js";  
import validater from "../middleware/validation.js";

// console.log(validater);


const userRouter = express.Router()

userRouter.post("/register", validater(create), registerUser);
userRouter.post ("/login",loginUser)
export default userRouter;