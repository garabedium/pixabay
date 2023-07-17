import { NextResponse } from 'next/server';

export async function GET(request: NextResponse){
  // const url = JSON.parse(request.url);
  // console.log(url)
  console.log(request.nextUrl.searchParams)
  console.log(process.env.PIXABAY_API_KEY)
  console.log(process.env.NODE_ENV)
  return NextResponse.json({ message: 'lorem'}, { status: 200 })
}