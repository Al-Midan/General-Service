import { courseComplaint } from "../../domain/entitites/courseComplaint";
import { IgeneralRepository } from "../../infrastructure/interface/IgeneralRepository";
import { IgeneralUsecase } from "../interface/IgeneralUsecase";


export class GeneralUseCase implements IgeneralUsecase {
  private repository: IgeneralRepository;

  constructor(repository: IgeneralRepository) {
    this.repository = repository;
  }
    async   courseComplaints(allvalues:courseComplaint){
      const response =  await this.repository.courseComplaints(allvalues)
      return  response ? response : null;
    }

}
