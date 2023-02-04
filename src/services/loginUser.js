import { instance } from "./api"
import { loginURL } from "../helpers/url"

export const loginUser = async ({ username, password }) => {
  const payload = {
    username,
    password,
  }
  try {
    const response = await instance.post(loginURL, payload)
    return response.data
  } catch (error) {
    // console.log(error.response)
    console.log(error.response)
    // return error.response
    // used Promise cause wanted to use API error message
    return error.response
  }
}
