module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://Oussema17:1h4HeicW3vmoFdLo@cluster0.gvckm.mongodb.net/Cluster0?retryWrites=true&w=majority"
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dwvwjxizk/image/upload/',
  },
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
}
