import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "@/types/auth";
import { getServerSession } from "@/lib/auth/getServerSession";

const authMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const session = await getServerSession();

    if (!session?.session?.user) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/";
      redirectUrl.search = "";
      return NextResponse.redirect(redirectUrl);
    }

    return next(request, event);
  };
};

export default authMiddleware;