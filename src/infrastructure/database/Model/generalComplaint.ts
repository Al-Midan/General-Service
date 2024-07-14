import mongoose, { Document, Schema } from "mongoose";

export interface IgeneralComplaint extends Document {
  subject: string;
  description: string;
  complaintPhoto: string;
}

const generalComplaintSchema: Schema = new Schema({
    subject: {
    type: String,
  },
  description: {
    type: String,
  },
  complaintPhoto: {
    type: String,
  },
});

const GeneralComplaint = mongoose.model<IgeneralComplaint>("GeneralComplaint", generalComplaintSchema);

export default GeneralComplaint;
