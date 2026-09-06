export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth"

export async function GET(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers });
  return NextResponse.json({ hasSession: !!session, session });
}