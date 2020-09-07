import express from 'express';

import { PORT } from '@configs/environment';

import { supportApis, defaultApi } from './api';

const app = express();

app.get('/health-check', (_, res) => res.send('Healthy!'));

supportApis.forEach((api) => {
  app.use(`/api/${api.version}`, api.router);
});
app.use('/api', defaultApi.router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
