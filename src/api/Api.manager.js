import axios from "axios";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function flatReq(req, ms = 500) {
  return Promise.all([sleep(ms), req]).then(([_, res]) => res);
}

export function getRequest(url) {
  return flatReq(axios.get(url));
}

export function postRequest(url, data) {
  return flatReq(axios.post(url, data));
}

export function deleteRequest(url) {
  return flatReq(axios.delete(url));
}

export function putRequest(url, data) {
  return flatReq(axios.put(url, data));
}
