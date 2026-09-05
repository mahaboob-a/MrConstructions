import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export type UserRole = "admin" | "contractor" | "client";

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  comparePassword(candidate: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin", "contractor", "client"], default: "client" },
  },
  { timestamps: true }
);

UserSchema.methods.comparePassword = function (candidate: string) {
  return bcrypt.compare(candidate, this.passwordHash);
};

export default model<IUser>("User", UserSchema);
