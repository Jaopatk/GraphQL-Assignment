import mongoose from "mongoose";
const { Schema } = mongoose;

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/contacts", {
  useNewUrlParser: true,
});

const TaskSchema = new Schema({
  title: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

const ListSchema = new Schema({
  title: {
    type: String,
  },
  task: [TaskSchema],
});

const Lists = mongoose.model("contacts", ListSchema);

export { Lists };
