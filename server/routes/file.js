const router = require("express").Router();
const mongo = require("mongodb");
const Grid = require("gridfs-stream");
const db = require("../config/connection");
const mongoose = require("mongoose")
let gfs;

// Grid.mongo = mongoose.mongo

db.once('open', () => {
 
  gfs = new mongoose.mongo.GridFSBucket(db.db, {bucketName: "photos"});
  //console.log(gfs.db);
  
});
router.get("/:filename", async (req, res) => {
  
  try {
    const file = await gfs.find({ filename: req.params.filename })
    .toArray((err, files) => {
      if (!files[0] || files.length === 0) {
        return res.status(200).json({
          success: false,
          message: "No files availible",
        });
      }
      
      if (files[0].contentType === 'image/jpeg' 
      || files[0].contentType === 'image/jpg' 
      || files[0].contentType === 'image/svg' 
      || files[0].contentType === 'image/png') {
        gfs.openDownloadStreamByName(req.params.filename).pipe(res);
      }
    })
    
  } catch (error) {
    console.log(error);
    res.send("not found");
  }
});



module.exports = router;
