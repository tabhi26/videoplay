const Video = require("../model/videoModel")

const getAllVideo = async (req, res) => {
    try {
        const video = await Video.find();
    
        res.status(200).json(video);
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
} 

const creatVideo = async (req, res) => {
    const { title, duration, uploadDate, views, category } = req.body;
    let videosPaths = [];
  
    if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
      for (let video of req.files.videos) {
        videosPaths.push("/" + video.path);
      }
    }
  
    try {
      const createdVideo = await Video.create({
        title,
        videos: videosPaths,
        duration,
        uploadDate,
        views,
        category
      });
  
      res.status(200).json({ message: "Media created successfully", createdVideo });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
}

module.exports = { getAllVideo, creatVideo };