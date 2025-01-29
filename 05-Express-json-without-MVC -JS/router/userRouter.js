import express, { Router } from "express";
import jsonfile from "jsonfile"

const userRouter = Router();

/**
 * usage : get all users
 * url : http://127.0.0.1:9999/api/users/home
 * method : GET
 */

const file = "D:/Nirali/BackEnd/05-Express-json-without-MVC -JS/db/users.json";
userRouter.get("/", (request, response) => {
  jsonfile.readFile(file, function (err, obj) {
    if (err) console.error(err);
    response.json(obj);
  });
});

/**
 * usage : insert Record
 * url : http://127.0.0.1:9999/api/users/insertUser
 * method : POST
 */
userRouter.post("/insertUser", (request, response) => {
  response.json({
    msg: "Record Inserted....",
  });
});

export default userRouter;
