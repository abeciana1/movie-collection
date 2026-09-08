"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import Google from "@/social-logos/Google";
import { authClient } from "@/lib/auth/auth-client"
import logger from "@/lib/helpers/logger";

const authOptions = {
  callbackURL: "/welcome",
  errorCallbackURL: "/",
  newUserCallbackURL: "/welcome",
};

const AuthForm = () => {
  const handleGoogle = async () => {
    try {
      await authClient.signIn.social(
        {
          provider: "google",
          ...authOptions,
        },
        {
          onRequest: (ctx) => {
            logger(
              "User is about to sign in",
              `ctx:\n${JSON.stringify(ctx, null, 2)}`
            );
          },
          onSuccess: (ctx) => {
            logger(
              "User has signed in",
              `ctx:\n${JSON.stringify(ctx, null, 2)}`
            );
          },
          onError: (ctx) => {
            logger(
              "User failed to sign in",
              `ctx:\n${JSON.stringify(ctx, null, 2)}`
            );
          },
        }
      );
    } catch (error) {
      logger(
        "User failed to sign in with Google",
        `error: \n${JSON.stringify(error, null, 2)}`
      );
    }
  };

  return (
    <Card enableGradient className="mx-auto w-70 md:w-100">
      <CardHeader>
        <CardTitle>Sign into your account</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button variant="outline" size="lg" onClick={handleGoogle}>
          <Google /> Continue with Google
        </Button>
      </CardContent>
    </Card>
  );
};

export default AuthForm;