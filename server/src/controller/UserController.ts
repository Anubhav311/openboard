import { Request, Response } from "express";
import { getAccessToken } from "../auth/auth";
import { Token } from "../models/Token";
import { getGithubUser } from "../githubApi/ghUserDb";
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
    res.json(user);
  } catch (error) {
    console.error("Error retrieving users: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
