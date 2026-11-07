export type ResponseType = "json" | "text";

export interface FetchExternalOptions extends Omit<RequestInit, "next"> {
  accept?: string;
  responseType?: ResponseType;
  next?: { revalidate?: number; tags?: string[] };
}

export type FetchExternalParams = URLSearchParams | Record<string, string>;

// Carries the HTTP status so callers can branch on it
export class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}