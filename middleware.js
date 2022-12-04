import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {

  const jwt = request.cookies.get('myTokenName')

    if (jwt === undefined) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    try {
      await jwtVerify(jwt.value, new TextEncoder().encode('secret'));
      return NextResponse.next();
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
}

//Para proteger más de una ruta se usa el matcher

export const config = {
  matcher: ['/dashboard', '/']
}
