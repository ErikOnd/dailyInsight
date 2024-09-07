import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAccessToken } from "@auth0/nextjs-auth0/edge";

export async function middleware(request: NextRequest) {
    try {
        const { accessToken } = await getAccessToken();

        if (accessToken) {
            return NextResponse.next();
        }
    } catch (error) {
        console.error("Error fetching access token:", error);
    }

    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: ["/profile", "/home", "/pricing", "/aboutUs", "/contact"],
};
