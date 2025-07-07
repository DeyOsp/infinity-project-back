import dotenv from 'dotenv';
dotenv.config();

export const variablesDB = ({
  railway: process.env.RAILWAY,
  data_base: process.env.DATABASE
})
