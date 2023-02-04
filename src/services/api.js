import axios from "axios"
import { baseURL } from "../helpers/url"

export const instance = axios.create({
  baseURL,
  responseType: "json",
})

instance.defaults.headers.post["Content-Type"] = "application/json"
