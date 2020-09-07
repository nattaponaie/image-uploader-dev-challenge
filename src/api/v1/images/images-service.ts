import crypto from 'crypto';

import { logError } from '@utils/logger';
import { putS3Object } from '@utils/s3';

const uploadImage = async (file: Express.Multer.File): Promise<string> => {
  try {
    const fileName = `${Date.now().toString()}-${file.originalname}`;
    const hash = crypto.createHash('sha256').update(fileName).digest('base64');
    const filePath = `${hash}.jpg`;

    const result = await putS3Object(filePath, file.buffer);
    return result;
  } catch (error) {
    logError('images.uploadImage:', error);
    throw error;
  }
}

export default {
  uploadImage,
};
