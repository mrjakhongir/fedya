export interface ITest {
  id: number;
  title: string;
  description: string;
  subject: string;
  courseLevel: string;
  eduLevel: string;
  totalTests: number;
  university: string;
  createdAt: string;
  semestr: string;
  options: { id: number; label: string }[];
  author: string;
}
