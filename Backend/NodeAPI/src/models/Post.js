const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {

    correoElectronico: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
  },
   { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);