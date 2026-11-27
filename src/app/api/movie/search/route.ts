import { NextRequest, NextResponse } from 'next/server'
import { searchTMDB } from '@/lib/tmdb/search'

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");
  console.log("request", query);
  const searchResults = await searchTMDB(query as string);
  const { tv = [], movie = []} = Object.groupBy(searchResults.results, (result) => result.media_type ? "tv" : "movie");

  return NextResponse.json({
    results: {
      tv,
      movie
    }
  });
}