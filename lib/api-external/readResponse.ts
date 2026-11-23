import { ApiError } from "./types";

type JsonRecord = Record<string, unknown>;

// Keys APIs commonly use for a human-readable error, in priority order.
const ERROR_MESSAGE_KEYS = [
  "message", // your own routes
  "error",
  "status_message", // TMDB
] as const;

function readErrorMessage(json: unknown, fallback: string): string {
  if (json && typeof json === "object") {
    const body = json as JsonRecord;

    for (const key of ERROR_MESSAGE_KEYS) {
      const value = body[key];

      if (typeof value === "string" && value) {
        return value;
      }
    }
  }

  return fallback;
}

// Returns the parsed body as `unknown` so callers validate it.
export async function readResponse(response: Response): Promise<unknown> {
  const fallback = response.statusText || `http_${response.status}`;

  // Error bodies may not be JSON, so a parse failure must not hide the status.
  let json: unknown;

  try {
    json = await response.json();
  } catch {
    throw new ApiError(
      response.ok ? "invalid_json_response" : fallback,
      response.status
    );
  }

  if (!response.ok) {
    throw new ApiError(readErrorMessage(json, fallback), response.status);
  }

  return json;
}