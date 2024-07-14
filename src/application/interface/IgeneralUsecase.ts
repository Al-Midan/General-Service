import { IAllCourseComplaints } from "../../domain/entitites/allCourseComplaints";
import { courseComplaint } from "../../domain/entitites/courseComplaint";
import { IComplaint } from "../../infrastructure/database/Model/courseComplaint";
import { IgeneralComplaint } from "../../infrastructure/database/Model/generalComplaint";
import { IserviceComplaint } from "../../infrastructure/database/Model/serviceComplaint";

export interface IgeneralUsecase {
    courseComplaints(allvalues:courseComplaint):Promise<IComplaint | null>;
    serviceComplaints(allvalues:courseComplaint):Promise<IserviceComplaint | null>;
    generalComplaints(allvalues:courseComplaint):Promise<IgeneralComplaint | null>;
    getCourseComplaints():Promise<IAllCourseComplaints[] | null>;
}
