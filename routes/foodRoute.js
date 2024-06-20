import express from 'express'
import { addFood ,listFood,removeFood } from '../controllers/foodController.js'
import multer from 'multer';


const foodRouter =express.Router();

// in this we are creating one image storage engine that fill upload the image
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`);
    }
});  //  is the template that provide the unique name
const upload = multer({storage:storage});
// with the help of upload object we made help in storing the image at upload folder
foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood);
foodRouter.delete("/remove",removeFood);
// poat method is used to send the data to be processed on the server and in response provide a single value

export default foodRouter;