import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRouter from "./routes/authRoutes";
import leaderBoardRouter from "./routes/leaderboardRouter";
import githubUserRouter from "./routes/githubUserRouter";
import connectToDatabase from "./databaseConfig";
import errorHandler from "./middlewares/Error";

const app: Express = express();
connectToDatabase();

app.use(cors());
app.use(bodyParser.json());

// custom middlewares
app.use("/", authRouter);

// routes
app.use("/", leaderBoardRouter);
app.use("/getUserData", githubUserRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});

app.use(errorHandler);
