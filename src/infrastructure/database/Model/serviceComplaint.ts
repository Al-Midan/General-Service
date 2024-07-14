import mongoose, { Document, Schema } from "mongoose";

export interface IserviceComplaint extends Document {
  courseName: string;
  instructorName: string;
  description: string;
  complaintPhoto: string;
}

const serviceComplaintSchema: Schema = new Schema({
    serviceName: {
    type: String,
  },
  ServicerName: {
    type: String,
  },
  description: {
    type: String,
  },
  complaintPhoto: {
    type: String,
  },
});

const ServiceComplaint = mongoose.model<IserviceComplaint>("ServiceComplaint", serviceComplaintSchema);

export default ServiceComplaint;
