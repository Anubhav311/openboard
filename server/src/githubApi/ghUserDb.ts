import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

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
  const payload = { ...data.data };

  return payload;
};
