/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com',
          },
        ],
        // คำสั่งสำหรับการที่เราใช้รูปจากภายนอก
        unoptimized:true
      }
};

export default nextConfig;
