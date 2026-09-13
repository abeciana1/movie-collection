import authMiddleware from "@/src/middleware/auth-middleware"
import proxy from "@/src/middleware"

export default proxy([authMiddleware])

export const config = { matcher: ["/welcome"] };