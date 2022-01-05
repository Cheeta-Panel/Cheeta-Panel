module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/Qg5TrP2z',
        permanent: true,
        basePath: false
      },
    ]
  }
}