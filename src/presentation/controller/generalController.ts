// userController.ts
import { NextFunction, Request, Response } from "express";
import { IgeneralUsecase } from "../../application/interface/IgeneralUsecase";


export class generalController {
  private generalUsecase: IgeneralUsecase;
  constructor(generalUsecase: IgeneralUsecase) {
    this.generalUsecase = generalUsecase;
  }

 
}
