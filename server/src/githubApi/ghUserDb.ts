import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { Schema, Document, model, Model } from "mongoose";
import { User } from "../types/User";

interface UserDocument extends User, Document {}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: [true, "Name not found"] },
  avatar: { type: String, required: [true, "Name not found"] },
  username: { type: String, required: [true, "Name not found"], unique: true },
  followers: { type: Number, required: [true, "Name not found"] },
  following: { type: Number, required: [true, "Name not found"] },
  twitter: { type: String, required: false },
  github: { type: String, required: [true, "Name not found"] },
  linkedin: { type: String, required: false },
  youtube: { type: String, required: false },
});

export class UserModel {
  private model: Model<UserDocument>;

  constructor() {
    this.model = model<UserDocument>("User", userSchema);
  }

  async createUser(user: User): Promise<UserDocument> {
    const createdUser = new this.model(user);
    return createdUser.save();
  }

  async getUserById(id: string): Promise<UserDocument | null> {
    return this.model.findById(id).exec();
  }

  async checkUserExists(param: string): Promise<boolean> {
    const userExists = await this.model.exists({ username: param });
    return !!userExists; // Return true if user exists, false otherwise
  }
}

// getUserData
export const getGithubUser = async (token: string): Promise<any> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Authorization: token, // Bearer Access Token
    },
    url: "https://api.github.com/user",
  };

  const data: AxiosResponse<any, any> = await axios(options);

  const {
    name,
    avatar_url,
    login,
    followers,
    following,
    twitter_username,
    html_url,
    linkedin_username,
    youtube_username,
  }: {
    name: string;
    avatar_url: string;
    login: string;
    followers: number;
    following: number;
    twitter_username?: string;
    html_url: string;
    linkedin_username?: string;
    youtube_username?: string;
  } = data.data;

  const user: User = {
    name,
    avatar: avatar_url,
    username: login,
    followers,
    following,
    twitter: twitter_username,
    github: html_url,
    linkedin: linkedin_username,
    youtube: youtube_username,
  };

  return user;
};
