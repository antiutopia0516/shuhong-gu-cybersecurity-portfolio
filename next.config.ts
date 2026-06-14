import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages && repositoryName ? `/${repositoryName}` : undefined,
  assetPrefix: isGitHubPages && repositoryName ? `/${repositoryName}/` : undefined,
  images: {
    unoptimized: isGitHubPages
  }
};

export default nextConfig;
