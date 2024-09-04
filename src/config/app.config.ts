export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  mongodburi: process.env.MONGO_DB_URI,
  port: process.env.PORT || 3003,
  defaultLimit: +process.env.DEFAULT_LIMIT || 5,
});
