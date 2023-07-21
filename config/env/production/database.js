const fs = require('fs');
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: {
          ca: fs.readFileSync(`${__dirname}/ca-certificate.crt`).toString(),
        },
      },
      debug: false,
    },
  });
