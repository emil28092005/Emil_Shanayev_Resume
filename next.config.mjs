/** @type {import('next').NextConfig} */
const REPO_NAME = 'Emil_Shanayev_Resume'

const nextConfig = {
  output: 'export',
  basePath: `/${REPO_NAME}`,
  assetPrefix: `/${REPO_NAME}`,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
