const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: {
        values: [
          "Agriculture",
          "Business",
          "Education",
          "Entertainment",
          "Art",
          "Investment",
          "Uncategorized",
          "Weather",
        ],
        message: "{VALUE} is not supported",
      },
      default: "Uncategorized",
    },
    description: { type: String, required: true, trim: true },
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    thumbnail: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

module.exports = model("Post", postSchema);
