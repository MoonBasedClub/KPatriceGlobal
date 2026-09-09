/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The default `X-Powered-By: Next.js` advertises the framework and version
  // to anyone scanning for known advisories.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Stops the site being framed into a lookalike that proxies clicks
          // on the booking CTA.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Stops a served asset being re-interpreted as a different type.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Send the origin to third parties (the GoHighLevel calendar), never
          // the full path and query.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // The site asks for none of these; deny them so an embedded frame
          // cannot either.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Tells browsers to reach this domain over HTTPS only. Vercel already
          // redirects, but the header removes the first plaintext request.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
