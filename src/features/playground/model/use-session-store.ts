import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IQuestionOption {
  id: number;
  label: string;
}

export interface ISessionQuestion {
  _id?: string;
  text?: string;
  options?: IQuestionOption[];
  selected?: IQuestionOption;
  wrongAttempts?: IQuestionOption[];
  correct?: boolean | null;
}

interface SessionState {
  sessionId: string | null;
  currentIndex: number;
  question: ISessionQuestion | null;

  setSession: (data: {
    sessionId: string;
    currentIndex: number;
    question: ISessionQuestion;
  }) => void;

  updateQuestion: (question: Partial<ISessionQuestion>) => void;
  clear: () => void;
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      sessionId: null,
      currentIndex: 0,
      question: null,

      setSession: ({ sessionId, currentIndex, question }) =>
        set({ sessionId, currentIndex, question }),

      updateQuestion: (question) =>
        set((state) => ({
          question: {
            ...(state.question ?? {}),
            ...question,
          },
        })),

      clear: () => set({ sessionId: null, currentIndex: 0, question: null }),
    }),
    {
      name: "session-storage", // 💾 key in localStorage
      // optional: only persist specific fields
      partialize: (state) => ({
        sessionId: state.sessionId,
        currentIndex: state.currentIndex,
        question: state.question,
      }),
    },
  ),
);
