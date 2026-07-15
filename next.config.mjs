/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/contacts", destination: "/#contact", permanent: true },
      { source: "/contacts-page", destination: "/#contact", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/services-page", destination: "/", permanent: true },
      { source: "/careers", destination: "/", permanent: true },
      { source: "/careers-page", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
