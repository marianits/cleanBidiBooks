import { NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt"

export async function middleware(req) {
  
  const token = await getToken({ req })
  if (token === null) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))
  }
  if (token.role !== 'admin') {
    return NextResponse.redirect(new URL('/error', req.url))
  }
  return NextResponse.next();
}
  
  //Para proteger más de una ruta se usa el matcher
  
  export const config = {
    matcher: ['/admin/:path*', '/',]
  }
 