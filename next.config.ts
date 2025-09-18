import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 2678400, //31 days
    remotePatterns: [
      new URL("https://img.clerk.com/**"),
      new URL("https://di.ku.dk/**"),
      new URL("https://www.mooc.org/**"),
      new URL(
        "https://static1.howtogeekimages.com/**",
        new URL("https://scontent.fmnl8-4.fna.fbcdn.net/**")
      ),
    ],
  },
};

export default nextConfig;
