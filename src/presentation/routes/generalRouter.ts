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
router.get('/complaints/getCourseComplaints',controller.courseComplaints.bind(controller));
export default router;
