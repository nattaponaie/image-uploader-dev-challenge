import dotenv from 'dotenv';
import express from 'express';

import { supportApis, defaultApi } from './api';

// initialize configuration
dotenv.config();

const app = express();
const { env: { PORT } } = process;

app.get('/health-check', (_, res) => res.send('Healthy!'));

supportApis.forEach((api) => {
  app.use(`/api/${api.version}`, api.router);
});
app.use('/api', defaultApi.router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
