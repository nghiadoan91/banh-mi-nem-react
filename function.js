import { https } from "firebase-functions";
import { default as next } from "next";

const isDev = process.env.NODE_ENV !== "production";

const server = next({
  dev: isDev,
  compression: false,
  conf: { distDir: ".next" }
});

const nextjsHandle = server.getRequestHandler();
export const nextServer = https.onRequest(async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  await server.prepare();
  return await nextjsHandle(req, res);
});
