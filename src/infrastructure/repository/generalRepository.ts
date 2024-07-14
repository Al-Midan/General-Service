import { IAllCourseComplaints } from "../../domain/entitites/allCourseComplaints";
import { courseComplaint } from "../../domain/entitites/courseComplaint";
import CourseComplaint from "../database/Model/courseComplaint";
import GeneralComplaint from "../database/Model/generalComplaint";
import ServiceComplaint from "../database/Model/serviceComplaint";
import { IgeneralRepository } from "../interface/IgeneralRepository";
import { uploadS3Image } from "../s3/s3Uploader";

export class generalRepository implements IgeneralRepository {
  async courseComplaints(allvalues: courseComplaint) {
    console.log("allvalues", allvalues);

    const s3Response: any = await uploadS3Image(allvalues.complaintPhoto);
    if (s3Response.error) {
      console.error("Error uploading image to S3:", s3Response.error);

      throw new Error("Failed to upload image to S3");
    }

    console.log("URL of the image from the S3 bucket:", s3Response.Location);
    const courseComplaint = {
      courseName: allvalues.courseName,
      instructorName: allvalues.instructorName,
      description: allvalues.description,
      complaintPhoto: s3Response.Location,
    };

    const courseComplaintdb = new CourseComplaint(courseComplaint);
    const savedComplaint = await courseComplaintdb.save();
    console.log("Course Complaint created successfully:", savedComplaint);

    return savedComplaint ? savedComplaint : null;
  }
  async serviceComplaints(allvalues: courseComplaint) {
    console.log("allvalues", allvalues);

    const s3Response: any = await uploadS3Image(allvalues.complaintPhoto);
    if (s3Response.error) {
      console.error("Error uploading image to S3:", s3Response.error);

      throw new Error("Failed to upload image to S3");
    }

    console.log("URL of the image from the S3 bucket:", s3Response.Location);
    const serviceComplaint = {
      serviceName: allvalues.serviceName,
      ServicerName: allvalues.ServicerName,
      description: allvalues.description,
      complaintPhoto: s3Response.Location,
    };

    const serviceComplaintdb = new ServiceComplaint(serviceComplaint);
    const savedComplaint = await serviceComplaintdb.save();
    console.log("service Complaint created successfully:", savedComplaint);

    return savedComplaint ? savedComplaint : null;
  }
  async generalComplaints(allvalues: courseComplaint) {
    console.log("allvalues", allvalues);

    const s3Response: any = await uploadS3Image(allvalues.complaintPhoto);
    if (s3Response.error) {
      console.error("Error uploading image to S3:", s3Response.error);

      throw new Error("Failed to upload image to S3");
    }

    console.log("URL of the image from the S3 bucket:", s3Response.Location);
    const generalComplaints = {
      subject: allvalues.subject,
      description: allvalues.description,
      complaintPhoto: s3Response.Location,
    };

    const generalComplaintdb = new GeneralComplaint(generalComplaints);
    const savedComplaint = await generalComplaintdb.save();
    console.log("general Complaint created successfully:", savedComplaint);

    return savedComplaint ? savedComplaint : null;
  }
  async getCourseComplaints() {
    try {
      const dbValues = await CourseComplaint.find();
      console.log("dbValues CourseComplaint", dbValues);

      return dbValues ? dbValues : null;
    } catch (error) {
      console.error(
        "error occurred: in get course complaints repository ",
        error
      );
      return null;
    }
  }
  async getServiceComplaints() {
    try {
      const dbValues = await ServiceComplaint.find();
      console.log("dbValues ServiceComplaint", dbValues);

      return dbValues ? dbValues : null;
    } catch (error) {
      console.error(
        "error occurred: in get service complaints repository ",
        error
      );
      return null;
    }
  }
  async getGeneralComplaints() {
    try {
      const dbValues = await GeneralComplaint.find();
      console.log("dbValues GeneralComplaint", dbValues);

      return dbValues ? dbValues : null;
    } catch (error) {
      console.error(
        "error occurred: in get general complaints repository ",
        error
      );
      return null;
    }
  }
}
