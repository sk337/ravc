import { NextRequest } from "next/server";
import axios from "axios";
import { env } from "@/config";

export async function GET(request: NextRequest) {
  const oauthCode = request.nextUrl.searchParams.get("code");
  console.log("OAuth code:", oauthCode);
  if (!oauthCode) {
    return new Response("No OAuth code found", { status: 400 });
  }

  const response = await axios.postForm(
    "https://apis.roblox.com/oauth/v1/token",
    {
      client_id: env.ROBLOX_CLIENT_ID,
      client_secret: env.ROBLOX_SECRET,
      code: oauthCode,
      grant_type: "authorization_code",
    }
  );
}
