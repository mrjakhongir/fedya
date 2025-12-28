import type { ISessionQuestion } from "../../model/use-session-store";

export interface IStartSessionPayload {
  testId: string;
  userId?: number;
  mode: string;
}

export interface IStartSessionResponse {
  sessionId: string;
  currentIndex: number;
  question: ISessionQuestion;
}
