import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { User } from "../types/User";

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
