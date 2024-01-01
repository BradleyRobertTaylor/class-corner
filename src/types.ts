import { classrooms } from './data/mock';

export type Classroom = {
  id: number;
  name: string;
  gradeLevel: string;
  numberOfStudents?: number;
};
