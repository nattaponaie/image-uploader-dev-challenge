const uploadImage = async (file: Express.Multer.File): Promise<void> => {
  try {
    console.log('uploadImage', file);
  } catch (error) {
    console.error(error.message);
  }
}

export default {
  uploadImage,
};
