// const multer = require("multer");

// const storage = multer.diskStorage({
//   filename: path.join(__dirname, function (req, filename, callback) {
//     callback(null, file.original(filename));
//   }),
// });

// const upload = multer({ storage: storage });
// module.exports = upload;

// const multer = require('multer');

// const storage = multer.diskStorage({
//   filename: function (req,file,cb) {
//     cb(null, file.originalname)
//   }
// });

// const upload = multer({storage: storage});

// module.exports = upload;
//================================================================================================

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({});
const imageFileFilter = (req, file, callback) => {
  console.log(file);

  if (!file.mimetype.startsWith("image")) {
    callback("Support only image files", false);
  }
  callback(null, true);
};

const upload = multer({ storage, imageFileFilter });

// const storage = new multer.memoryStorage();
// const upload = multer({
//   storage,
// });
// module.exports = upload;
export default upload;
