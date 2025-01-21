import express, { Application, Request, Response, Router } from "express";
import { request } from "http";

const userRouter: Router = Router();

// http://127.0.0.1:9999/api/users/home---->GET
userRouter.get("/home", (request: Request, response: Response) => {
    response.json({ msg: "Hello,Welcome To Home" });
})


// http://127.0.0.1:9999/api/users/insertUser---->POST
userRouter.post("/insertUser", (request: Request, response: Response) => {
    response.json({
        msg:"Record Inserted...."
    })
})

export default userRouter;