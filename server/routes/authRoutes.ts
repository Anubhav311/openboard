import express, { Router } from "express";
import { getAccessTokenController } from "../controller/AuthController";

const router: Router = express.Router();

router.get("/getAccessToken", getAccessTokenController);

export default router;
