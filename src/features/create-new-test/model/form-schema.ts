import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(2, { message: "Title is required" }),
  description: z.string().optional(),
  subject: z.string().min(2, { message: "Subject is required" }),
  faculty: z.string().min(2, { message: "Faculty is required" }),
  courseLevel: z.string().min(1, { message: "Course level is required" }),
  eduLevel: z.string().min(1, { message: "Education level is required" }),
  semestr: z.string().min(1, { message: "Semester is required" }),
  university: z.string().min(2, { message: "University is required" }),
  file: z.string(),
});
