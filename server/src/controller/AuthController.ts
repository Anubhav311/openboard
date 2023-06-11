import { Request, Response } from "express";
import { getAccessToken } from "../auth/auth";
import { Token } from "../models/Token";
import dotenv from "dotenv";

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

export const getAccessTokenController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const params =
    "?client_id=" +
    CLIENT_ID +
    "&client_secret=" +
    CLIENT_SECRET +
    "&code=" +
    req.query.code;

  try {
    const token: Token = await getAccessToken(params);
    res.json(token);
  } catch (error) {
    console.error("Error retrieving users: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
