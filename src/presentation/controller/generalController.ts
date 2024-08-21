import { NextFunction, Request, Response } from "express";
import { IgeneralUsecase } from "../../application/interface/IgeneralUsecase";
import { kafkaProducer } from "../../infrastructure/brokers/kafkaBroker/kafkaProducer";
import { kafkaConsumer } from "../../infrastructure/brokers/kafkaBroker/kafkaConsumer";
import axios from "axios";
export class generalController {
  private generalUsecase: IgeneralUsecase;
  constructor(generalUsecase: IgeneralUsecase) {
    this.generalUsecase = generalUsecase;
  }
  async courseComplaints(req: Request, res: Response) {
    try {
      const values = req.body;
      const complaintPhoto = req.file;
      const allvalues = { complaintPhoto, ...values };
      const response = this.generalUsecase.courseComplaints(allvalues);
      res
        .status(200)
        .json({ message: "Complaint/Feedback Sended Successfully", response });
    } catch (error) {
      console.error("error occurred in courseComplaints", error);
      res.status(500).json({ message: "Error occurred in courseComplaints" });
    }
  }
  async getcourseComplaints(req: Request, res: Response){
    try {
      const response =  await this.generalUsecase.getCourseComplaints()
    res.status(200).json({message:"Successfully Got it All Course Complaints",response})
    } catch (error) {
      console.error("Error occurred in getcourseComplaints", error);
      res.status(500).json({message:"Error Occured in Get All Course Complaints"})
    }
  }
  async getserviceComplaints(req: Request, res: Response){
    try {
      const response =  await this.generalUsecase.getserviceComplaints()
    res.status(200).json({message:"Successfully Got it All service Complaints",response})
    } catch (error) {
      console.error("Error occurred in getserviceComplaints", error);
      res.status(500).json({message:"Error Occured in Get All service Complaints"})
    }
  }
  async getgeneralComplaints(req: Request, res: Response){
    try {
      const response =  await this.generalUsecase.getgeneralComplaints()
    res.status(200).json({message:"Successfully Got it All General Complaints",response})
    } catch (error) {
      console.error("Error occurred in getgeneralComplaints", error);
      res.status(500).json({message:"Error Occured in Get All General Complaints"})
    }
  }
  async serviceComplaints(req: Request, res: Response){
    
    try {
      const values = req.body;
      const complaintPhoto = req.file;
      const allvalues = { complaintPhoto, ...values };
      const response = this.generalUsecase.serviceComplaints(allvalues);
      res
        .status(200)
        .json({ message: "Complaint/Feedback Sended Successfully", response });
    } catch (error) {
      console.error("error occurred in serviceComplaints", error);
      res.status(500).json({ message: "Error occurred in serviceComplaints" });
    }
    
  }
  async generalComplaints(req: Request, res: Response){
    try {
      const values = req.body;
      const complaintPhoto = req.file;
      const allvalues = { complaintPhoto, ...values };
      const response = this.generalUsecase.generalComplaints(allvalues);
      res
        .status(200)
        .json({ message: "Complaint/Feedback Sended Successfully", response });
    } catch (error) {
      console.error("error occurred in generalComplaints", error);
      res.status(500).json({ message: "Error occurred in generalComplaints" });
    }
    
  }
  async AllenrollCourse(req: Request, res: Response) {
    try {
      const id = req.params.userId;      
      // await kafkaProducer.sendEnrolledCoursesRequest(userId);
      // const response = await kafkaConsumer.waitForEnrolledCoursesResponse(userId);
      const datas = await axios.get(
        `http://13.71.112.129/course-service/getEnrolledCourseWithId/${id}`
      );
        const response = datas.data.response;
      
      res.status(200).json({ message: "Enrolled Courses Received successfully", response });
    } catch (error) {
      console.error("Error occurred in AllenrollCourse", error);
      res.status(500).json({ message: "Error occurred in AllenrollCourse" });
    }
  }
  
}
