import {NextResponse } from "next/server";
import type {NextRequest} from "next/server";
// import withAuth from "./middlewares/withAuth";
import { getToken } from "next-auth/jwt";

export default async function mainMiddleware(req:NextRequest) {
    const token = await getToken({req: req})
    console.log(token)
    const pathname = req.nextUrl.pathname;
	if (!token && pathname != "/") {
        const url = new URL("/auth/login", req.url);
        return NextResponse.redirect(url);
	}
    if (!token) {
        return;
    }
    if (!token.phoneNumber) {
        const url = new URL("/", req.url);
        url.searchParams.set('phone', "true")
        return NextResponse.redirect(url)
    }

}

export const config = { matcher: ["/test/:path*"] }