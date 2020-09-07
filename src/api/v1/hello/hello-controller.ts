import express from 'express';

const router = express.Router();
const resource = 'hello';

router.get(
  `/${resource}`,
  (_, res) => {
    res.json({ hello: 'world' });
  },
);

export default router;
