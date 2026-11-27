import { NextRequest, NextResponse } from 'next/server'
import { searchTMDB } from '@/lib/tmdb/search'

export async function GET(request: NextRequest) {
  console.log("request", request)
}