import { Router } from 'express';
import multer from 'multer';

import { limits } from '@configs/multer';

import service from './images-service';

const router = Router();
const resource = 'images';
const upload = multer({ limits });

router.post(
  `/${resource}`,
  upload.single('image'),
  async (req, res) => {
    console.log('req', req.file);
    
    const result = await service.uploadImage(req.file);
    res.json(result);
  },
);

export default router;
