import { NextResponse } from 'next/server'
import { auth } from './lib/auth'


export async function proxy(request) {

    const user = await auth.api.getUser({
        headers: await headers()
    })

    if (!user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

}


export const config = {
    matcher: '/about/:path*',
}