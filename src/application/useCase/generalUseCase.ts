import { IgeneralRepository } from "../../infrastructure/interface/IgeneralRepository";
import { IgeneralUsecase } from "../interface/IgeneralUsecase";


export class GeneralUseCase implements IgeneralUsecase {
  private repository: IgeneralRepository;

  constructor(repository: IgeneralRepository) {
    this.repository = repository;
  }

}
