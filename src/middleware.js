// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
	const { pathname } = request.nextUrl;

	if (pathname.startsWith('/admin')) {
		const userCookie = request.cookies.get('user');
		const user = userCookie ? JSON.parse(userCookie.value) : null;

		if (!user) {
			return NextResponse.redirect(new URL('/login', request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/admin/:path*']
};
