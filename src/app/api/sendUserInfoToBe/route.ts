import { getAccessToken } from "@auth0/nextjs-auth0";
import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";

export async function POST(request: NextRequest) {
    try {
        const { accessToken } = await getAccessToken();
        const email = await request.json()

        const response =  await fetch('/api/route-name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(email),
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data: NextApiResponse = await response.json();
        return data;

    } catch (error) {
        console.error('Fetch error:', error);
        throw new Error(`Fetch error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

