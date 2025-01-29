import {Router } from "express";
import * as UserController from "../controller/UserController.js"

const userRouter = Router();

/** 
 * usage : get all users
 * url : http://127.0.0.1:9999/api/users/home
 * method : GET
 */
userRouter.get("/", async (request, response) => {
    console.log("inside Router");
    await UserController.getAllUsers(request,response)
    
})
// userRouter.get("/home", (request: Request, response: Response) => {
//     response.json({ msg: "Hello,Welcome To Home" });
// })


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