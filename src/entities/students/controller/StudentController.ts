import { Request, Response } from "express";
import { StudentControllerStructure } from "./types.js";
import { StudentRepository } from "../repository/types.js";

class StudentController implements StudentControllerStructure {
  constructor(private studentsRepository: StudentRepository) {
    this.get = this.get.bind(this);
  }

  public async get(req: Request, res: Response): Promise<void> {
    const students = await this.studentsRepository.get();

    res.status(200).json({ students });
  }
}

export default StudentController;
