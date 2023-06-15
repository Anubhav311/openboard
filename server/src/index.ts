import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRouter from "./routes/authRoutes";
import githubUserRouter from "./routes/githubUserRouter";
import connectToDatabase from "./databaseConfig";
import errorHandler from "./middlewares/Error";

const app: Express = express();
connectToDatabase();

app.use(cors());
app.use(bodyParser.json());
app.use("/", authRouter);
app.use("/getUserData", githubUserRouter);
app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send({ response: "Hello World" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
