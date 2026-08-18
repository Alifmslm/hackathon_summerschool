/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // pdfkit reads its bundled .afm font metrics at runtime via fs; keep it
    // external so Next doesn't re-bundle and break those relative paths.
    serverComponentsExternalPackages: ["pdfkit"],
  },
};

module.exports = nextConfig;