/** @type {import('next').NextConfig} */
// import { createProxyMiddleware } from 'http-proxy-middleware';

const {createProxyMiddleware} = require('http-proxy-middleware')

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/:path*'
      },
    ];
  }
};

module.exports = nextConfig;
