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

export default router;
