import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
import authRouter from "../routes/authRoutes";

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", authRouter);

// getUserData
app.get("/getUserData", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: req.get("Authorization"), // Bearer Access Token
    },
    url: "https://api.github.com/user",
  };

  const data = await axios(options);
  const payload = { ...data.data };

  res.json(payload);
});

app.get("/", (req: Request, res: Response) => {
  res.send({ response: "Hello World", test: process.env.TEST_VARIABLE });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
