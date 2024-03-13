export default () => ({
    port: parseInt(process.env.PORT, 10),
    database: {
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) ,
      name: process.env.POSTGRES_USERNAME,
      user: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE
    }
  });