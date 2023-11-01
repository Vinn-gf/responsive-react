import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
// import https from "../../utils/https";
import https_binar from "../../utils/https_binar";


const LoginWithRedux = async (input) => {
  return await https_binar.post(API_ENDPOINTS.LOGIN_USER , input)
}


const LoginUser = async (input) => {
  return await https_binar.post(API_ENDPOINTS.LOGIN_USER , input).then((result) => {
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    return result;
  }).catch((err) => {
      
  });
};


const useLogin = () => {
  return useMutation(LoginUser);
};

export { LoginUser, useLogin, LoginWithRedux };
