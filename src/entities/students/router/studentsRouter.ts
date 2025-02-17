import { Router } from "express";
import StudentController from "../controller/StudentController.js";
import StudentSupabaseRepository from "../repository/StudentSupabaseRepository.js";

const studentsRouter = Router();

const studentRepository = new StudentSupabaseRepository();
const studentController = new StudentController(studentRepository);

studentsRouter.get("/", studentController.get);

export default studentsRouter;
