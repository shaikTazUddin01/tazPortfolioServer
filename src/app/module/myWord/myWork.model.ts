import mongoose, { Schema } from 'mongoose';
import { IMyWork } from './myWork.interface';


// Define the schema
const myWorkSchema = new Schema<IMyWork>({
  name: { type: String, required: true,unique:true },
  thumble: { type: String, required: true },
  image: { type: String, required: true },
  details: { type: String, required: true },
  livesiteClient: { type: String, required: true },
  livesiteServer: { type: String, required: true },
  adminDashBoard: { type: String },
  gitClient: { type: String, required: true },
  gitServer: { type: String, required: true },
  feature: { type: [String], required: true },
  useTechnlogyClient: { type: [String], required: true },
  useTechnlogyServer: { type: [String], required: true },
  adminEmail: { type: String },
  adminPassword: { type: String },
});


export const MyWork = mongoose.model<IMyWork>('MyWork', myWorkSchema);
