import { Request, Response } from "express";
import { Token } from "../models/Token";
import { getGithubUser } from "../githubApi/ghUserDb";
import { UserModel } from "../githubApi/ghUserDb";
import dotenv from "dotenv";

dotenv.config();

export const getGithubUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  let token: string = req.get("Authorization") || "";

  try {
    if (token.length == 0) {
      throw "invalid token recieved";
    }
    const user = await getGithubUser(token);
    const { username }: { username: string } = user;
    const userInstance = new UserModel();
    const userExists = await userInstance.checkUserExists(username);

    if (!userExists) {
      await userInstance.createUser(user);
      console.log("new user created", username);
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error retrieving users: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
