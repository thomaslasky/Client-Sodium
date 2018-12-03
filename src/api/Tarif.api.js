import axios from "axios";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function flatReq(req, ms = 500) {
    return Promise.all([sleep(ms), req])
                  .then(([_, res]) => res.data.resultats);
}

export function getElems() {
    return flatReq(axios.get(""));
}