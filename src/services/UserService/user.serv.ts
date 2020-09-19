import { AxiosResponse } from "axios";
import xhrInstance from "../xhrConfig";
import { LoginResponse, registerResponse } from "./type";

/**
 *
 * @param username
 * @param password
 */
const loginService = (
  username: string,
  password: string
): Promise<AxiosResponse<LoginResponse>> =>
  xhrInstance.post(REST_ENDPOINTS.LOGIN, { username, password });

/**
 *
 * @param username
 * @param password
 */
const registerService = (
  username: string,
  password: string
): Promise<AxiosResponse<registerResponse>> =>
  xhrInstance.post(REST_ENDPOINTS.REGISTER, { username, password });

export { loginService, registerService };
