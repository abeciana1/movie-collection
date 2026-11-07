import { ApiError, type ResponseType } from "./types";

type JsonRecord = Record<string, unknown>;

function readErrorMessage(json: unknown, fallback: string): string {
  if (json && typeof json === "object") {
    const { message, error } = json as JsonRecord;

    if (typeof message === "string" && message) {
      return message;
    }

    if (typeof error === "string" && error) {
      return error;
    }
  }

  return fallback;
}

// Returns the parsed body as `unknown` so callers validate it
export async function readResponse(
  response: Response,
  responseType: ResponseType = "json"
): Promise<unknown> {
  const fallback = response.statusText || `http_${response.status}`;

  if (responseType === "text") {
    const text = await response.text();

    if (!response.ok) {
      throw new ApiError(fallback, response.status);
    }

    return text;
  }

  // Error bodies may not be JSON, so don't let a parse failure hide the status
  let json: unknown;

  try {
    json = await response.json();
  } catch {
    if (!response.ok) {
      throw new ApiError(fallback, response.status);
    }

    throw new ApiError("invalid_json_response", response.status);
  }

  if (!response.ok) {
    throw new ApiError(readErrorMessage(json, fallback), response.status);
  }

  return json;
}