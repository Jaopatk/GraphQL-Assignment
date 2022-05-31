import mongoose from "mongoose";
const { Schema } = mongoose;

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Lists", {
  useNewUrlParser: true,
});

const TaskSchema = new Schema({
  title: {
    type: String
  },
  status: {
    type: Boolean
  },
  position: {
    type: Number
  },
});

const ListSchema = new Schema({
  title: {
    type: String,
  },
  task: [TaskSchema],
});

const Lists = mongoose.model("lists", ListSchema);

export { Lists };
