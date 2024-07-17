import express from "express";
import { generalController } from "../controller/generalController";
import { generalRepository } from "../../infrastructure/repository/generalRepository";
import { GeneralUseCase } from "../../application/useCase/generalUseCase";
import multer from 'multer';
const router = express.Router();
const upload = multer();

const repository = new generalRepository();
const course = new GeneralUseCase(repository);
const controller = new generalController(course);
router.post('/complaints/course',upload.single('screenshot'),controller.courseComplaints.bind(controller));
router.post('/complaints/service',upload.single('screenshot'),controller.serviceComplaints.bind(controller));
router.post('/complaints/general',upload.single('screenshot'),controller.generalComplaints.bind(controller));
router.get('/complaints/getCourseComplaints',controller.getcourseComplaints.bind(controller));
router.get('/complaints/getServiceComplaints',controller.getserviceComplaints.bind(controller));
router.get('/complaints/getGeneralComplaints',controller.getgeneralComplaints.bind(controller));
router.get('/complaints/AllenrollCourse/:userId',controller.AllenrollCourse.bind(controller));
export default router;
