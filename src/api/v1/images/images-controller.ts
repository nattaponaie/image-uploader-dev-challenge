import { Router } from 'express';
import multer from 'multer';

import asyncWrapper from '@api/middleware/async-wrapper';
import { limits } from '@configs/multer';

import service from './images-service';

const router = Router();
const resource = 'images';
const upload = multer({ limits });

router.post(
  `/${resource}`,
  upload.single('image'),
  asyncWrapper(async (req, res) => {
    const result = await service.uploadImage(req.file);
    res.json(result);
  }),
);

export default router;
