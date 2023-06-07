import express, { Express, Request, Response, response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.get("/getAccessToken", async (req: Request, res: Response) => {
  const params =
    "?client_id=" +
    CLIENT_ID +
    "&client_secret=" +
    CLIENT_SECRET +
    "&code=" +
    req.query.code;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    data: { data: "data" },
    url: "https://github.com/login/oauth/access_token" + params,
  };

  const data = await axios(options);
  const payload = { ...data.data };

  res.json(payload);
});

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
