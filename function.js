const { https } = require("firebase-functions");
const { default: next } = require("next");

const isDev = process.env.NODE_ENV !== "production";

const server = next({
  dev: isDev,
  compression: false,
  conf: { distDir: ".next" }
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  res.header("Access-Control-Allow-Origin", "https://www.banhminem.com");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  return server.prepare().then(() => nextjsHandle(req, res));
});
