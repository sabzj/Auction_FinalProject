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
// const multer = require("multer");
import multer from "multer";
import path from "path";
// const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // Specify the destination folder where files will be stored
    callback(null, "./uploads"); // Adjust the path accordingly
  },
  filename: function (req, file, callback) {
    // Specify how the file should be named
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
// module.exports = upload;
export default upload;
