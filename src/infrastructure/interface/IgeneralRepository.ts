import { IAllCourseComplaints } from "../../domain/entitites/allCourseComplaints";
import { courseComplaint } from "../../domain/entitites/courseComplaint";
import { IComplaint } from "../database/Model/courseComplaint";
import { IgeneralComplaint } from "../database/Model/generalComplaint";
import { IserviceComplaint } from "../database/Model/serviceComplaint";

export interface IgeneralRepository {
    courseComplaints(allvalues:courseComplaint):Promise<IComplaint | null>;
    serviceComplaints(allvalues:courseComplaint):Promise<IserviceComplaint | null>;
    generalComplaints(allvalues:courseComplaint):Promise<IgeneralComplaint | null>;
    getCourseComplaints():any;

}
