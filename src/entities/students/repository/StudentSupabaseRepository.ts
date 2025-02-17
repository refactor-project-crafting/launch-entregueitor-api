import supabaseAuthClient from "../../../auth/supabase/supabaseAuth.js";
import { Student } from "../types.js";
import { StudentRepository } from "./types.js";

class StudentSupabaseRepository implements StudentRepository {
  public async get(): Promise<Student[]> {
    const { data, error } = await supabaseAuthClient.auth.admin.listUsers();

    if (error) {
      throw error;
    }

    const students = data.users.map<Student>((student) => ({
      id: student.id,
      username: student.email!,
      name: student.user_metadata.name,
    }));

    return students;
  }
}

export default StudentSupabaseRepository;
