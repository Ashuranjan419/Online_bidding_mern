const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      trim: true,
    },
    image: {
      type: Object,
      default: {},
    },
    category: {
      type: String,
      required: [true, "Post category is required"],
      default: "All",
    },
    commission: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please add a Price"],
    },
    height: {
      type: Number,
    },
    lengthpic: {
      type: Number,
    },
    width: {
      type: Number,
    },
    mediumused: {
      type: String,
    },
    weight: { 
      type: Number,
    },
    isverify: {
      type: Boolean,
      default: false,
    },
    isSoldout: {
      type: Boolean,
      default: false,
    },
    soldTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
