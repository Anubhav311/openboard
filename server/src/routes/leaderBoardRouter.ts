import express, { Router } from "express";
import { leaderBoardController } from "../controller/LeaderBoardController";
// import { getGithubUserController } from "../controller/UserController";

const router: Router = express.Router();

router.get("/", leaderBoardController);

export default router;
