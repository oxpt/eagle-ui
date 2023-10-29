/** @type {import('next').NextConfig} */
const nextConfig = {
    matcher: ['/((?!api|static|.*\\..*|_next).*)', { source: '/' }]
}

module.exports = nextConfig
