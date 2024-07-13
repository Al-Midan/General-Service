import mongoose, { Document, Schema } from "mongoose";

export interface IComplaint extends Document {
  courseName: string;
  instructorName: string;
  description: string;
  complaintPhoto: string;
}

const complaintSchema: Schema = new Schema({
  courseName: {
    type: String,
  },
  instructorName: {
    type: String,
  },
  description: {
    type: String,
  },
  complaintPhoto: {
    type: String,
  },
});

const CourseComplaint = mongoose.model<IComplaint>("CourseComplaint", complaintSchema);

export default CourseComplaint;
