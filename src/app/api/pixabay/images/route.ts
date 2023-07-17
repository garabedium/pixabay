import { NextRequest, NextResponse } from 'next/server';
import { 
  pixabayApiBase as apiBase,
  pixabayApiKey as apiKey,
 } from "@/utils/constants.util";

export async function GET(req: NextRequest){
  const query = req.nextUrl.searchParams.get('query');
  const apiUrl = `${apiBase}${apiKey}&q=${query}`;
  const options = { method: 'GET' };

  try {
    const response = await fetch(apiUrl, options);
    const { hits } = await response.json();

    return NextResponse.json(
      { data: hits}, { status: 200 }
    )   
  } catch (error) {
    return NextResponse.json(
      { error: 'Oops...'}, { status: 500 }
    )
  }
}