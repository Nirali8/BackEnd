import { Request, Response, Router } from "express";
const jsonfile = require('jsonfile')

const userRouter: Router = Router();

/** 
 * usage : get all users
 * url : http://127.0.0.1:9999/api/users/home
 * method : GET
 */

const file = "D:/Nirali/BackEnd/05-Express-json-without-MVC-Book/db/books.json"
userRouter.get("/", (request: Request, response: Response) => {
    jsonfile.readFile(file, function (err:any, obj:any) {
    if (err) console.error(err)
        response.json(obj);
})
})


/** 
 * usage : insert Record
 * url : http://127.0.0.1:9999/api/users/insertUser
 * method : POST
 */
userRouter.post("/insertUser", (request: Request, response: Response) => {
    response.json({
        msg:"Record Inserted...."
    })
})

export default userRouter;