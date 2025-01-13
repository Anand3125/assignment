const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    dob: { type: Date, required: true },
    qualification: { type: String, required: true },
    otherQualification: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FormData", FormDataSchema);
