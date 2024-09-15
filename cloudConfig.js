const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:dm3429axx,
    api_key:226184274841313,
    api_secret:W_ItSqW0yOavnipJt3UFX3OodFo,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV',
      allowerdFormats: ["png", "jpg", "jpeg"],
    },
  });
  module.exports = {
    cloudinary,
    storage,
  }