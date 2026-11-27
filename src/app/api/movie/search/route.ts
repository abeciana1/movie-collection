import { NextRequest, NextResponse } from 'next/server'
import { searchTMDB } from '@/lib/tmdb/search'
import type { SearchResultItem } from '@/types/api-response/movie';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");
  console.log("request", query);
  const results = await searchTMDB(query as string);
  const { tv = [], movie = []} = Object.groupBy(results as SearchResultItem[], (result: SearchResultItem) => result.media_type ? "tv" : "movie");

  return NextResponse.json({
    results: {
      tv,
      movie
    }
  });
}