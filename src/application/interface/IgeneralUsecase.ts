import { courseComplaint } from "../../domain/entitites/courseComplaint";
import { IComplaint } from "../../infrastructure/database/Model/courseComplaint";

export interface IgeneralUsecase {
    courseComplaints(allvalues:courseComplaint):Promise<IComplaint | null>;
}
