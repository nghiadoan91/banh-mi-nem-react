const { https } = require("firebase-functions");
const { default: next } = require("next");
import Router from 'next/router'

const isDev = process.env.NODE_ENV !== "production";

const server = next({
  dev: isDev,
  compression: false,
  conf: { distDir: ".next" }
});
import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/') {
        return NextResponse.redirect('/en')
    }
    return NextResponse.next()
}
const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  return server.prepare().then(() => {
    const { pathname } = req.nextUrl
    if (pathname == '/') {
        return NextResponse.redirect('/en')
    }else{
      return nextjsHandle(req, res);
    }
  })
});
