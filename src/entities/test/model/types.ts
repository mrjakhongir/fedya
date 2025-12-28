import type { IUser } from "@/entities/user/model/types";

export interface ITest {
  _id: string;
  ownerId: number;
  title: string;
  description?: string;
  subject?: string;
  eduLevel?: string;
  courseLevel?: string;
  university?: string;
  semester?: string;
  visibility: "public" | "private";
  allowedUserIds: number[];
  status: "draft" | "published";
  questions: IQuestion[];
  createdAt: string;
  updatedAt: string;
  isSaved: boolean;
}

export interface IQuestion {
  id: number;
  text: string;

  options: {
    id: number;
    label: string;
  }[];

  correctOptionId: number;
}

export interface ITestsResponse {
  tests: ITest[];
  count: number;
  page: number;
  limit: number;
  total: number;
  hasNextPage: boolean;
  nextPage: number;
  hasPrevPage: boolean;
  prevPage: number;
}

export interface ITestResponse {
  id: string;
  createdAt: string;
  title: string;
  subject: string;
  visibility: string;
  description: string;
  eduLevel: string;
  courseLevel: string;
  university: string;
  author: IUser;
  totalCount: number;
  questions: IQuestion[];
  isSaved: boolean;
}
