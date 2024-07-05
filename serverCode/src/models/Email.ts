import mongoose  from "mongoose";

const Schema = mongoose.Schema;

// Define the Email schema
const emailSchema = new Schema({
  email: { type: String, required: true, unique: true },
//   createdAt: { type: Date, default: Date.now },
});

// Create the Email model
const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
