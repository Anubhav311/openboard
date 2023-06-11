import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { Token } from "../models/Token";

export const getAccessToken = async (params: string): Promise<Token> => {
  const options: AxiosRequestConfig = {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    data: { data: "data" },
    url: "https://github.com/login/oauth/access_token" + params,
  };

  const data: AxiosResponse<any, any> = await axios(options);
  const payload: Token = { ...data.data };

  return payload;
};
