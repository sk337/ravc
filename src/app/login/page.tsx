import { Button } from "@/components/ui/button";
import { CardHeader, Card, CardContent } from "@/components/ui/card";
import { env } from "@/config";
import Link from "next/link";

export default function LoginPage() {
  const params = new URLSearchParams({
    client_id: env.ROBLOX_CLIENT_ID,
    redirect_URI: env.NEXT_HOST + "/api/auth/redirect",
    scope:
      "openid profile user.social:read group:read user.advanced:read user.inventory-item:read",
    response_type: "code",
    prompt: "select_account consent",
  }).toString();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-fit p-3">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">Login</h1>
        </CardHeader>
        <CardContent>
          <Link
            href={`https://apis.roblox.com/oauth/v1/authorize?${params.toString()}`}
            target="_blank"
          >
            <Button>Login With Roblox</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
