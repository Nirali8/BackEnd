import { Request,Response } from "express";
import { IUser } from "../models/IUser";
import { USerUtil } from "../util/UserUtil";

/**
 * usage:get all user
 * url:http://127.0.0.1:9999/users
 * method:GET
 */

export const getAllUsers = async (request: Request, response: Response) => {
    try {
        let userData: IUser[] = await USerUtil.getAllUsersFromDB();
        // console.log("inside controller : ",userData);
        return response.status(200).json(userData);
    }
    catch (error)
    {
        return response.status(500).json({msg:"server Error"})
    }
}