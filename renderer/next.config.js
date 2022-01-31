module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    return config;
  },
};
