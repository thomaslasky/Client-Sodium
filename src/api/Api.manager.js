function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function flatReq(req, ms = 500) {
    return Promise.all([sleep(ms), req])
                  .then(([_, res]) => res.data.resultats);
}