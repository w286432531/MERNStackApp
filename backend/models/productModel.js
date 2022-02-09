import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  }, 
}, {
    timestamps: true
});
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    stockCount: {
      type: Number,
      required: true,
      default: 0,
    },
    averageRating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviewsNum: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema]
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
