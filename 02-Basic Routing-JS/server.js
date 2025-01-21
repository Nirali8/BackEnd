import express from 'express';
import userRouter from "./Routes/userRouter.js"

const hostName= "127.0.0.1";
const port = 8888;

const app = express();

app.get("/", (request, response) => {
    response.status(200);
    response.json({
        msg: "Welcome To Express Server"
    });
});

//router Configuration

app.use("/api/users", userRouter);

app.listen(port, hostName, () => {
    console.log(`Express Server is started at http://${hostName}:${port}`);
});