module.exports = {
    apps: [
      {
        name: 'siiges-api',
        script: 'packages/api-gateway/src/index.js',
        env_development: {
          NODE_ENV: 'development',
          PORT: 3005,
        },
        env_production: {
          NODE_ENV: 'production',
          PORT: 8080,
        }
      }
    ]
  };
  