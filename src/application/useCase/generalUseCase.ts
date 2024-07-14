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
    async serviceComplaints(allvalues:courseComplaint){
      const response =  await this.repository.serviceComplaints(allvalues)
      return  response ? response : null;
    }
    async generalComplaints(allvalues:courseComplaint){
      const response =  await this.repository.generalComplaints(allvalues)
      return  response ? response : null;
    }
    async   getCourseComplaints(){
      const response =  await this.repository.getCourseComplaints()
      return  response ? response : null;
    }
    async   getserviceComplaints(){
      const response =  await this.repository.getServiceComplaints()
      return  response ? response : null;
    }
    async   getgeneralComplaints(){
      const response =  await this.repository.getGeneralComplaints()
      return  response ? response : null;
    }

}
