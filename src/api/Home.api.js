import { getRequest } from "./Api.manager";

export function getTexts() {
  return getRequest("http://localhost:8000/text/home");
}
