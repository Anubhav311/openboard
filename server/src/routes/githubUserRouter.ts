import express, { Router } from "express";
import { getGithubUserController } from "../controller/UserController";

const router: Router = express.Router();

router.get("/", getGithubUserController);

export default router;
