import mongoose from "mongoose";

export const empolyeeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true},
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Employee = mongoose.model("Employee", empolyeeSchema);
