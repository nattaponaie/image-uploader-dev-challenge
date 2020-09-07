import dotenv from 'dotenv';

// initialize configuration
dotenv.config();

const { env } = process;

export const {
  PORT,
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
} = env;
