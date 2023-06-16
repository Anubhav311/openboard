import { NextFunction, Request, Response } from "express";
import { Token } from "../models/Token";
import { getGithubUser } from "../githubApi/ghUserDb";
import { UserModel } from "../githubApi/ghUserDb";
import dotenv from "dotenv";
import { ErrorHandler } from "../utils/errorHandler";
import { LeaderBoard } from "../models/LeaderBoard";
import { MongoError, MongoServerError } from "mongodb";

dotenv.config();

export const leaderBoardController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let board = false;

    if (board) {
      return next(new ErrorHandler("Not Found", 333));
    }

    await LeaderBoard.create({
      name: "open source",
    });

    res.status(200).json({ message: "board returned" });
  } catch (error) {
    console.error("Error creating user: ", error);
    next(error);
  }
};
