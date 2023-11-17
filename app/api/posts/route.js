import { NextResponse } from "next/server";

 export async function GET() {
    const posts = await fetch('https://dummyjson.com/posts', {
        next: { revalidate: 60 },
    });
    const res = await posts.json();
    
  return NextResponse.json(res);
}
