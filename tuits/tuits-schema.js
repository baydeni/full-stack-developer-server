import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    topic: String,
    postedBy: {
      username: String,
    },
    liked: { type: Boolean, defaultValue: false },
    disliked: { type: Boolean, defaultValue: false },
    verified: { type: Boolean, defaultValue: false },
    handle: String,
    time: String,
    title: String,
    tuit: String,
    attachments: {
      video: String,
      image: String,
    },
    "logo-image": String,
    "avatar-image": String,
    stats: {
      comments: { type: Number, defaultValue: 0 },
      retuits: { type: Number, defaultValue: 0 },
      likes: { type: Number, defaultValue: 0 },
      dislikes: { type: Number, defaultValue: 0 },
    },
  },
  { collection: "tuits" }
);
export default schema;
