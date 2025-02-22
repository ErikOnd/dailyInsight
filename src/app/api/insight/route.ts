import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "@auth0/nextjs-auth0";

export async function POST(request: NextRequest) {
	try {
		const { accessToken } = await getAccessToken();
		const insight = await request.json();


		const response = await fetch("endpoint to create insight in be", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify(insight),
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}

		const data = await response.json();

		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ error: error instanceof Error ? error.message : "Unknown error" },
			{ status: 500 },
		);
	}
}


// todo: create template for fetching (DRY Principle)
