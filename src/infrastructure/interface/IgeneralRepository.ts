import { courseComplaint } from "../../domain/entitites/courseComplaint";
import { IComplaint } from "../database/Model/courseComplaint";

export interface IgeneralRepository {
    courseComplaints(allvalues:courseComplaint):Promise<IComplaint | null>;
}
