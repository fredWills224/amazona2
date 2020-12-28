import multer from 'multer';
import express from 'express';
import { isAuth } from '../utils.js';

const uploadRouter= express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'uploads/');
    },
    filename(req, file, cb){
        cb(null, `${Date.now()}.jpg`);
    }
});

// [upload] is the middleware used to store the files that are sent with the request that calls
// which ever api [upload] is used in. 
const upload = multer({ storage });

uploadRouter.post('/', isAuth, upload.single('image'), (req, res)=>{
    res.send(`/${req.file.path}`);
});

export default uploadRouter;