import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Render allows writing only to /tmp
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp"); //  Safe for Render
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = uuidv4() + ext;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

export default upload;
