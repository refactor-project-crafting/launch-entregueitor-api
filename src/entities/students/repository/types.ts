import { Student } from "../types.js";

export interface StudentRepository {
  get(): Promise<Student[]>;
}
