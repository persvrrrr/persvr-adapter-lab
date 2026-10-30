import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Echo diagnostic info
  const headers = new Headers()
  headers.set('x-persvr-mw-fired', 'true')
  headers.set('x-persvr-seen-path', path)

  if (path.startsWith('/admin') || path.startsWith('/api/secret')) {
    const authCookie = request.cookies.get('session-token')
    if (!authCookie) {
      return NextResponse.json(
        { error: 'Unauthorized - valid session required', seenPath: path },
        { status: 401, headers }
      )
    }
  }

  const response = NextResponse.next()
  response.headers.set('x-persvr-mw-fired', 'true')
  response.headers.set('x-persvr-seen-path', path)
  return response
}

export const config = {
  matcher: ['/admin/:path*', '/api/secret/:path*'],
}
