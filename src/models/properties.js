import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Location: {
    type: String,
    required: true,
  },
  Features: {
    Bedrooms: {
      type: Number,
      required: true,
    },
    Bathrooms: Number,
    Balconies: Number,
    Kitchen: String,
  },
  Amenities: [String],
  CarpetArea: Number,
  AskingPrice: {
    type: Number,
    required: true,
  },
  IsForRent: {
    type: Boolean,
    required: true,
  },
  Furnished: Boolean,
  SpecialFeatures: [String],
  Landmarks: [String],
  ExactLocation: {
    DistanceFromBusStop: String,
    DistanceFromSchool: String,
  },
});

export default mongoose.models.Properties ||
  mongoose.model("Properties", propertySchema);
