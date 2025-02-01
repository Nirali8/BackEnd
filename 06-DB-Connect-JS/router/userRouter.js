import { Router } from "express";
import jsonfile  from 'jsonfile'

const userRouter = Router();

/** 
 * usage : get all users
 * url : http://127.0.0.1:9999/api/users/home
 * method : GET
 */

userRouter.get("/home", (request, response) => {
    response.json({ msg: "Hello,Welcome To Home" });
})

/** 
 * usage : insert Record
 * url : http://127.0.0.1:9999/api/users/insertUser
 * method : POST
 */
userRouter.post("/insertUser", (request, response) => {
    response.json({
        msg:"Record Inserted...."
    })
})

export default userRouter;