import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Protected API - middleware should block without auth',
    flag: 'PERSVR-API-TRAILING-9964',
    secrets: {
      dbUrl: 'postgresql://admin:s3cret@prod-db.internal:5432/maindb',
      jwtKey: 'persvr-demo-trailing-slash-key',
    }
  })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  return NextResponse.json({
    message: 'Protected POST - write operation executed',
    flag: 'PERSVR-WRITE-TRAILING-1175',
    received: body,
  })
}
