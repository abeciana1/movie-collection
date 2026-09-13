import { NextResponse } from "next/server";
import type { ChainableMiddleware, MiddlewareFactory } from "@/types/api/auth"

const proxy = (
  functions: MiddlewareFactory[] = [],
  index = 0
): ChainableMiddleware => {
  const current = functions[index]
  if (current) {
    const next = proxy(functions, index + 1)
    return current(next)
  }

  return async (request) => NextResponse.next({ request })
}

export default proxy