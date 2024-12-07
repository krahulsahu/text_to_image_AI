import express from 'express';
import { registerUser, loginUser, userCredits } from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';


const userRouter = express.Router();

userRouter.post('/register', registerUser); //http://localhost:5050/api/user/register
userRouter.post('/login', loginUser);  // http://localhost:5050/api/user/login
userRouter.get('/credits',userAuth, userCredits)  //// http://localhost:5050/api/user/credits



export default userRouter;







