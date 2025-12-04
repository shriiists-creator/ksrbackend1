const mongoose = require("mongoose");

const downloadBrochureSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    companyName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DownloadBrochure", downloadBrochureSchema);
