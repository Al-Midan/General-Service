// userController.ts
import { NextFunction, Request, Response } from "express";
import { IgeneralUsecase } from "../../application/interface/IgeneralUsecase";

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
}
