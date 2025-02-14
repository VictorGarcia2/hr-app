import { instance } from "./instance";

export async function postService(body) {
  try {
    const { status, data } = await instance.post("/services", body);
    return { data, status };
    //status code 201
  } catch (error) {
    throw error;
  }
}
