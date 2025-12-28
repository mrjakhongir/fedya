import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(2, { message: "Title is required" }),
  description: z.string().optional(),
  subject: z.string().min(2, { message: "Subject is required" }),
  faculty: z.string(),
  courseLevel: z.string(),
  eduLevel: z.string(),
  semestr: z.string(),
  university: z.string(),
  file: z
    .instanceof(File, { message: "TXT file is required" })
    .refine((file) => file.type === "text/plain", {
      message: "Only .txt files are allowed",
    }),
  visibility: z.boolean(),
});
