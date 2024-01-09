import { URL_BACKEND } from "@/config";
import axios from "axios";

export const BaseRequest = axios.create({
  baseURL: URL_BACKEND
});