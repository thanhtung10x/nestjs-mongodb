import { Schema, model } from 'mongoose';

const Course = new Schema(
  {
    name: { type: String },
    description: { type: String },
    img: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('Course', Course);
