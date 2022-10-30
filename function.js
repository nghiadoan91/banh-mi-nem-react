const { https } = require("firebase-functions");
const { default: next } = require("next");

const isDev = process.env.NODE_ENV !== "production";

const server = next({
  dev: isDev,
  compression: false,
  conf: { distDir: ".next" }
});
import { NextResponse, NextRequest } from 'next/server'
const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  if (pathname == '/') {
    return NextResponse.redirect('/en')
  };
  return server.prepare().then(() => nextjsHandle(req, res));
});
