const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    videos: [{ type: String }],
    duration: {
      type: String,
    },
    uploadDate: {
      type: Date,
    },
    views: {
      type: String,
    },
    category: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", videoSchema);
