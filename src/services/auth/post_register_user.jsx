import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import https from "../../utils/https";

const RegisterUser = async (input) => {
  return await https.post(API_ENDPOINTS.REGISTER_USER, input);
};

const useCreateUser = () => {
  return useMutation(RegisterUser);
};

export { RegisterUser, useCreateUser };
